#!/usr/bin/env node
// ============================================================
// The Candlekeep Vault — Build Script
// Reads content/ folder, generates public/ static site
// ============================================================

const fs      = require('fs-extra')
const path    = require('path')
const matter  = require('gray-matter')
const { marked }          = require('marked')
const { markedHighlight } = require('marked-highlight')
const hljs    = require('highlight.js')
const config  = require('./config')
const { buildPage } = require('./template')

// ── Paths ────────────────────────────────────────────────────
const ROOT    = path.join(__dirname, '..')
const CONTENT = path.join(ROOT, 'content')
const OUTPUT  = path.join(ROOT, 'public')
const STYLES  = path.join(__dirname, 'styles', 'main.css')

// ── Configure marked ─────────────────────────────────────────
marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext'
    return hljs.highlight(code, { language }).value
  }
}))

// Heading IDs are added via post-processing (see addHeadingIds function)

// ── File Registry ─────────────────────────────────────────────
// Maps filename (lower-case) → { url, title }  for wikilink resolution
const registry = new Map()

// ── Tag Index ─────────────────────────────────────────────────
// lowercased tag → { name (display), slug, pages: [{title, href}] }
const tagIndex = new Map()

// Tags to keep out of the Tags page / pills (case-insensitive)
function hiddenTagSet() {
  const set = new Set([String(config.dmOnlyTag).toLowerCase()])
  for (const t of (config.hiddenTags || [])) set.add(String(t).toLowerCase())
  return set
}

// Tag display name → URL slug
function slugifyTag(t) {
  return String(t).toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// ── Helpers ───────────────────────────────────────────────────

function isIgnored(filePath) {
  const rel   = path.relative(CONTENT, filePath)
  const parts = rel.split(path.sep)
  return parts.some(p => config.ignoredFolders.includes(p))
}

function isDMOnly(frontmatter) {
  const tags = Array.isArray(frontmatter.tags)
    ? frontmatter.tags
    : frontmatter.tags
    ? [frontmatter.tags]
    : []
  return tags.map(t => String(t).toLowerCase()).includes(config.dmOnlyTag)
}

// Relative file path → URL path (no base, no leading slash)
function toUrlPath(filePath) {
  const rel = path.relative(CONTENT, filePath).replace(/\.md$/i, '')
  return rel.split(path.sep).join('/')
}

// Full href including base URL
function toHref(urlPath) {
  return `${config.site.baseUrl}/${encodeURI(urlPath)}/`
}

// Add id attributes to h1-h6 tags for TOC anchor links
function addHeadingIds(html) {
  return html.replace(/<h([1-6])>(.*?)<\/h[1-6]>/gs, (match, level, text) => {
    const clean = text.replace(/<[^>]+>/g, '')
    const id    = clean.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim()
    return `<h${level} id="${id}">${text}</h${level}>`
  })
}

// Generate TOC from rendered HTML
function extractTOC(html) {
  const toc   = []
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>(.*?)<\/h[23]>/g
  let m
  while ((m = regex.exec(html)) !== null) {
    toc.push({
      level: parseInt(m[1]),
      id:    m[2],
      text:  m[3].replace(/<[^>]+>/g, '')
    })
  }
  return toc
}

// ── Obsidian Markdown Pre-Processing ─────────────────────────

// Strip DM-only sections: any heading whose text contains the
// configured marker word hides that heading and everything under it,
// up to the next heading at the same or higher level. Headings inside
// fenced code blocks are ignored.
function stripDMSections(md) {
  const marker = config.dmOnlySectionMarker
  if (!marker) return md

  const markerLc = marker.toLowerCase()
  const lines    = md.split('\n')
  const out      = []
  let inFence    = false   // inside a ``` or ~~~ code block
  let hideLevel  = 0       // 0 = not hiding; otherwise the marked heading's level

  for (const line of lines) {
    // Track fenced code blocks so we never treat their contents as headings
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence
      if (hideLevel === 0) out.push(line)
      continue
    }

    const headingMatch = !inFence && line.match(/^(#{1,6})\s+(.*)$/)

    if (headingMatch) {
      const level = headingMatch[1].length
      const text  = headingMatch[2]

      // If we're hiding and hit a heading at the same or higher level,
      // stop hiding — public content resumes here (unless this heading
      // is itself marked, handled below).
      if (hideLevel > 0 && level <= hideLevel) {
        hideLevel = 0
      }

      // Does this heading start a DM-only section?
      if (text.toLowerCase().includes(markerLc)) {
        hideLevel = level
        continue   // drop the marked heading itself
      }
    }

    if (hideLevel === 0) out.push(line)
  }

  return out.join('\n')
}

// Remove a note's leading H1 when it merely repeats the page title,
// so pages don't show their title twice.
function stripDuplicateTitle(md, title) {
  if (!title) return md
  const norm = s => s.replace(/[*_`]/g, '').replace(/\s+/g, ' ').trim().toLowerCase()
  const lines = md.split('\n')
  let i = 0
  while (i < lines.length && lines[i].trim() === '') i++   // skip leading blanks
  const m = i < lines.length ? lines[i].match(/^#\s+(.+?)\s*#*\s*$/) : null
  if (m && norm(m[1]) === norm(title)) {
    lines.splice(0, i + 1)
    while (lines.length && lines[0].trim() === '') lines.shift()
    return lines.join('\n')
  }
  return md
}

// Remove entire DM-only callout blocks (e.g. > [!secret]) from markdown,
// so they never reach the player site, search index, or embeds.
function stripDMCallouts(md) {
  const types = (config.dmOnlyCalloutTypes || []).map(t => String(t).toLowerCase())
  if (!types.length) return md
  const lines = md.split('\n')
  const out   = []
  let i = 0
  while (i < lines.length) {
    const m = lines[i].match(/^>\s*\[!([\w-]+)\]/)
    if (m && types.includes(m[1].toLowerCase())) {
      i++   // skip the header line
      while (i < lines.length && lines[i].startsWith('>')) i++  // and the body
      continue
    }
    out.push(lines[i])
    i++
  }
  return out.join('\n')
}

// Wrap tables so wide ones scroll horizontally instead of overflowing on mobile
function wrapTables(html) {
  return html
    .replace(/<table>/g, '<div class="table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>')
}

// Build a short plain-text excerpt from note body for index cards
function shortExcerpt(body, title = '', max = 90) {
  let text = stripDMSections(body)
    .replace(/^---[\s\S]*?---/, '')          // stray frontmatter
    .replace(/^#\s+.+$/m, '')                // leading heading line
    .replace(/!\[\[[^\]]*\]\]/g, '')         // image/file embeds
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, t, d) => (d || t)) // wikilinks
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')    // markdown images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // markdown links → text
    .replace(/\[!\w[\w-]*\][-+]?/g, '')      // callout markers [!note]
    .replace(/^\s*[-*+]{3,}\s*$/gm, '')      // horizontal rules ---
    .replace(/\|/g, ' ')                     // table pipes
    .replace(/[#*`>_~\[\]]/g, '')            // leftover markup chars
    .replace(/\s+/g, ' ')
    .trim()

  // Drop a leading repeat of the title (cards already show the title)
  const t = title.replace(/[*_`]/g, '').trim()
  if (t && text.toLowerCase().startsWith(t.toLowerCase())) {
    text = text.slice(t.length).replace(/^[\s:–—-]+/, '').trim()
  }

  return text.length > max ? text.slice(0, max).trim() + '…' : text
}

// Convert > [!type] callout blocks to HTML
function processCallouts(md) {
  const lines  = md.split('\n')
  const out    = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i]
    const headerMatch = line.match(/^>\s*\[!([\w-]+)\]\s*(.*)$/)

    if (headerMatch) {
      const type    = headerMatch[1].toLowerCase()
      const rawTitle = headerMatch[2].trim()
      const defaultLabel = type.charAt(0).toUpperCase() + type.slice(1)
      // If the "title" is actually a long sentence (a mis-authored callout),
      // fall back to the type label and move the text into the body.
      const longTitle = rawTitle.length > 56
      const title    = longTitle ? defaultLabel : (rawTitle || defaultLabel)
      const bodyLines = []

      i++
      while (i < lines.length && lines[i].startsWith('>')) {
        bodyLines.push(lines[i].replace(/^>\s?/, ''))
        i++
      }

      const bodyMd = (longTitle ? rawTitle + '\n\n' : '') + bodyLines.join('\n')
      const body = marked.parse(bodyMd)
      out.push(
        `<div class="callout callout-${type}" data-callout="${type}">` +
        `<div class="callout-title">${title}</div>` +
        `<div class="callout-body">${body}</div>` +
        `</div>`
      )
    } else {
      out.push(line)
      i++
    }
  }

  return out.join('\n')
}

// Convert [[wikilinks]] to HTML anchors
function processWikilinks(md) {
  return md.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target, display) => {
    const label = (display || target).trim()
    const key   = target.trim().toLowerCase()
    const found = registry.get(key)

    if (found) {
      return `<a href="${found.href}" class="wikilink">${label}</a>`
    }
    // Unresolved wikilink — show as plain span
    return `<span class="wikilink-missing" title="Not found: ${target}">${label}</span>`
  })
}

// ── Phase 1: Scan ─────────────────────────────────────────────
async function scan() {
  console.log('📚 Scanning vault...')
  const files = []

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const e of entries) {
      const full = path.join(dir, e.name)
      if (e.isDirectory()) {
        if (!isIgnored(full) && !e.name.startsWith('.')) await walk(full)
      } else if (e.name.endsWith('.md') && !isIgnored(full)) {
        files.push(full)
      }
    }
  }

  await walk(CONTENT)

  const hidden = hiddenTagSet()

  // Build registry for wikilink resolution
  for (const f of files) {
    const raw  = await fs.readFile(f, 'utf-8')
    const { data: fm } = matter(raw)
    if (isDMOnly(fm)) continue

    const urlPath = toUrlPath(f)
    const name    = path.basename(f, '.md')
    const title   = fm.title || name
    const entry   = { href: toHref(urlPath), title }

    entry.filePath = f
    registry.set(name.toLowerCase(), entry)

    const aliases = Array.isArray(fm.aliases)
      ? fm.aliases
      : fm.aliases ? [fm.aliases] : []
    for (const a of aliases) {
      registry.set(String(a).toLowerCase(), entry)
    }

    // Collect tags for the Tags index
    const tags = Array.isArray(fm.tags) ? fm.tags : (fm.tags ? [fm.tags] : [])
    for (const raw of tags) {
      const display = String(raw).trim()
      if (!display) continue
      const key = display.toLowerCase()
      if (hidden.has(key)) continue
      if (!tagIndex.has(key)) {
        tagIndex.set(key, { name: display, slug: slugifyTag(display), pages: [] })
      }
      tagIndex.get(key).pages.push({ title, href: entry.href })
    }
  }

  console.log(`✅ ${registry.size} pages indexed · ${tagIndex.size} tags`)
  return files
}


// Resolve ![[filename]] Obsidian embeds — loads and inlines the target file
async function processEmbeds(md) {
  const embedRegex = /!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g
  const matches = [...md.matchAll(embedRegex)]
  if (matches.length === 0) return md

  for (const match of matches) {
    const target  = match[1].trim()
    const key     = target.toLowerCase()
    const found   = registry.get(key)
    // Check if it's an image embed
    const imageExts = ['.png', '.jpg', '.jpeg', '.webp', '.gif', '.svg', '.bmp']
    const isImage = imageExts.some(ext => target.toLowerCase().endsWith(ext))

    if (isImage) {
      const attachDir = path.join(CONTENT, 'z_Attachments')
      const imgFile   = path.join(attachDir, target)
      const exists    = await fs.pathExists(imgFile)
      if (exists) {
        const imgUrl = `${config.site.baseUrl}/attachments/${encodeURIComponent(target)}`
        md = md.replace(match[0], `<img src="${imgUrl}" alt="${target}" class="embed-image">`)
      } else {
        md = md.replace(match[0], '')
      }
      continue
    }

    if (!found) {
      // Silently remove unresolvable embeds (e.g. pointing to ignored/DM-Only files)
      md = md.replace(match[0], '')
      continue
    }

    try {
      const raw = await fs.readFile(found.filePath || '', 'utf-8').catch(() => null)
      if (!raw) { md = md.replace(match[0], ''); continue }

      const { content: embedBody } = matter(raw)
      // Render embed content (skip further embeds to avoid infinite loops)
      const simpleBody  = stripDMCallouts(stripDMSections(embedBody)).replace(/!\[\[[^\]]+\]\]/g, '')
      const withLinks   = processWikilinks(processCallouts(simpleBody))
      const embedHtml   = marked.parse(withLinks)

      md = md.replace(match[0],
        `<div class="embed-block">${embedHtml}</div>`)
    } catch (_) {
      md = md.replace(match[0], '')
    }
  }
  return md
}

// ── Phase 2: Render a single page ────────────────────────────
async function renderFile(filePath, sessions, css, opts = {}) {
  const raw          = await fs.readFile(filePath, 'utf-8')
  const { data: fm, content: rawBody } = matter(raw)

  if (isDMOnly(fm)) return null

  // Remove any DM-only sections and DM-only callouts before rendering/indexing
  let body = stripDMCallouts(stripDMSections(rawBody))

  const urlPath = toUrlPath(filePath)
  const name    = path.basename(filePath, '.md')
  const title   = fm.title || name

  // Drop a leading H1 that just repeats the page title
  body = stripDuplicateTitle(body, title)

  // Subtitle from frontmatter (optional)
  const subtitle = fm.subtitle || fm.description || null

  // Tags
  const tags = Array.isArray(fm.tags)
    ? fm.tags
    : fm.tags ? [fm.tags] : []

  // Breadcrumb from URL segments
  const parts = urlPath.split('/')
  const breadcrumb = parts.slice(0, -1).map((seg, i) => ({
    label: decodeURIComponent(seg),
    url:   `${config.site.baseUrl}/${parts.slice(0, i + 1).join('/')}/`
  }))

  // Render content
  let processed = body
  processed = await processEmbeds(processed)
  processed = processCallouts(processed)
  processed = processWikilinks(processed)
  let html = marked.parse(processed)
  html = addHeadingIds(html)
  html = wrapTables(html)
  const toc  = extractTOC(html)

  // Excerpt for search index
  const excerpt = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/[#*`\[\]>]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 250)

  const page = buildPage({
    title, subtitle, tags, breadcrumb, toc,
    content: html, sessions, css,
    layout: opts.isHome ? 'home' : 'entry'
  })

  return {
    page,
    outputPath: path.join(OUTPUT, ...urlPath.split('/'), 'index.html'),
    searchEntry: { title, url: toHref(urlPath), excerpt }
  }
}

// ── Phase 3: Section index pages ──────────────────────────────
async function renderSectionIndex(label, folder, sessions, css) {
  const folderPath = path.join(CONTENT, ...folder.split('/'))
  const cards      = []

  // Recursively collect all pages in this folder and subfolders
  async function collectPages(dir, groupLabel) {
    try {
      const entries = await fs.readdir(dir, { withFileTypes: true })
      // Sort: folders first, then files
      entries.sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1
        if (!a.isDirectory() && b.isDirectory()) return 1
        return a.name.localeCompare(b.name)
      })
      for (const e of entries) {
        const full = path.join(dir, e.name)
        if (isIgnored(full)) continue
        if (e.isDirectory() && !e.name.startsWith('.')) {
          await collectPages(full, e.name)
        } else if (e.name.endsWith('.md')) {
          const raw = await fs.readFile(full, 'utf-8')
          const { data: fm, content } = matter(raw)
          if (isDMOnly(fm)) continue
          const n    = e.name.replace('.md', '')
          const t    = fm.title || n
          const urlP = toUrlPath(full)
          const desc = fm.subtitle || fm.description || shortExcerpt(content, t)
          cards.push({ title: t, href: toHref(urlP), group: groupLabel, desc })
        }
      }
    } catch (_) {}
  }

  await collectPages(folderPath, null)

  let gridHTML = ''
  if (cards.length === 0) {
    gridHTML = `<p class="empty-msg">No pages here yet. Add <code>.md</code> files to <code>${folder}</code> in your vault.</p>`
  } else {
    // Group by subfolder
    const groups = {}
    for (const c of cards) {
      const g = c.group || ''
      if (!groups[g]) groups[g] = []
      groups[g].push(c)
    }
    for (const [g, items] of Object.entries(groups)) {
      if (g) gridHTML += `<h2 class="index-group-label">${g}</h2>`
      gridHTML += `<div class="index-grid">` +
        items.map(c =>
          `<a href="${c.href}" class="index-card">
            <div class="ic-title">${c.title}</div>
            ${c.desc ? `<div class="ic-desc">${c.desc}</div>` : ''}
          </a>`
        ).join('') +
      `</div>`
    }
  }

  const html = buildPage({
    title: label, subtitle: null, tags: [], breadcrumb: [],
    toc: [], content: gridHTML, sessions, css, layout: 'section'
  })

  const outPath = path.join(OUTPUT, ...folder.split('/'), 'index.html')
  return { html, outPath }
}

// ── Phase 4: Sessions list ────────────────────────────────────
async function getSessions() {
  const folder = path.join(CONTENT, ...config.sessionsFolder.split('/'))
  const sessions = []
  try {
    const entries = await fs.readdir(folder)
    const mdFiles = entries.filter(f => f.endsWith('.md')).sort()
    for (const f of mdFiles) {
      const full = path.join(folder, f)
      const raw  = await fs.readFile(full, 'utf-8')
      const { data: fm } = matter(raw)
      if (isDMOnly(fm)) continue
      const n   = f.replace('.md', '')
      const url = toHref(toUrlPath(full))
      sessions.push({ label: fm.title || n, url })
    }
  } catch (_) {}
  return sessions
}


// ── Phase 5: Build index pages for ALL subfolders ─────────────
async function buildAllSubfolderIndexes(sessions, css) {
  let count = 0

  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true }).catch(() => [])
    for (const e of entries) {
      if (!e.isDirectory() || e.name.startsWith('.')) continue
      const full = path.join(dir, e.name)
      if (isIgnored(full)) continue

      // Build an index page for this subfolder
      const urlPath   = toUrlPath(full + '/index') // fake path for URL
      const folderUrl = `${config.site.baseUrl}/${encodeURI(path.relative(CONTENT, full))}/`
      const label     = e.name

      // Collect direct children of this subfolder
      const cards = []
      const children = await fs.readdir(full, { withFileTypes: true }).catch(() => [])
      children.sort((a, b) => {
        if (a.isDirectory() && !b.isDirectory()) return -1
        if (!a.isDirectory() && b.isDirectory()) return 1
        return a.name.localeCompare(b.name)
      })

      for (const c of children) {
        const cfull = path.join(full, c.name)
        if (isIgnored(cfull)) continue
        if (c.isDirectory() && !c.name.startsWith('.')) {
          const subUrl = `${config.site.baseUrl}/${encodeURI(path.relative(CONTENT, cfull))}/`
          cards.push({ title: c.name, href: subUrl, isFolder: true })
        } else if (c.name.endsWith('.md')) {
          const raw = await fs.readFile(cfull, 'utf-8')
          const { data: fm, content } = matter(raw)
          if (isDMOnly(fm)) continue
          const n = c.name.replace('.md', '')
          const desc = fm.subtitle || fm.description || shortExcerpt(content, fm.title || n)
          cards.push({ title: fm.title || n, href: toHref(toUrlPath(cfull)), desc })
        }
      }

      if (cards.length > 0) {
        const gridHTML = `<div class="index-grid">` +
          cards.map(c =>
            `<a href="${c.href}" class="index-card${c.isFolder ? ' folder-card' : ''}">
              <div class="ic-title">${c.title}</div>
              ${c.desc ? `<div class="ic-desc">${c.desc}</div>` : ''}
            </a>`
          ).join('') +
        `</div>`

        // Build breadcrumb for this subfolder
        const relParts  = path.relative(CONTENT, full).split(path.sep)
        const crumb = relParts.slice(0, -1).map((seg, i) => ({
          label: seg,
          url:   `${config.site.baseUrl}/${encodeURI(relParts.slice(0, i + 1).join('/'))}/`
        }))

        const html = buildPage({
          title: label, subtitle: null, tags: [], toc: [],
          breadcrumb: crumb,
          content: gridHTML, sessions, css, layout: 'section'
        })

        const outPath = path.join(OUTPUT, path.relative(CONTENT, full), 'index.html')
        await fs.ensureDir(path.dirname(outPath))
        await fs.writeFile(outPath, html)
        count++
      }

      // Recurse into this subfolder
      await walk(full)
    }
  }

  await walk(CONTENT)
  if (count > 0) console.log(`📂 Built ${count} subfolder index pages`)
}


// ── Calendar Banner ───────────────────────────────────────────
function parseCalendar(frontmatter) {
  return {
    currentDate:   frontmatter.current_date   || null,
    nextFullMoon:  frontmatter.next_full_moon  || null,
    daysRemaining: frontmatter.days_remaining  || null,
  }
}

function moonIcon(daysRemaining) {
  const d = parseInt(daysRemaining) || 15
  if (d <= 2)  return '🌕'
  if (d <= 7)  return '🌔'
  if (d <= 12) return '🌓'
  if (d <= 18) return '🌒'
  if (d <= 22) return '🌑'
  if (d <= 27) return '🌘'
  return '🌗'
}

function buildCalendarBanner(cal) {
  if (!cal || !cal.currentDate) return ''
  const icon = moonIcon(cal.daysRemaining)
  const days = cal.daysRemaining
    ? `${cal.daysRemaining} day${cal.daysRemaining === '1' ? '' : 's'} until next full moon`
    : ''
  return `
  <div class="calendar-banner">
    <div class="cal-date">
      <span class="cal-label">Current Date</span>
      <span class="cal-value">${cal.currentDate}</span>
    </div>
    <div class="cal-divider"></div>
    <div class="cal-moon">
      <span class="cal-moon-icon">${icon}</span>
      <div class="cal-moon-info">
        <span class="cal-label">Next Full Moon</span>
        <span class="cal-value">${cal.nextFullMoon || '—'}</span>
        ${days ? `<span class="cal-days">${days}</span>` : ''}
      </div>
    </div>
  </div>`
}

async function readCalendar() {
  const calPath = path.join(CONTENT, 'Campaign Notes', 'Campaign Calendar.md')
  try {
    const raw = await fs.readFile(calPath, 'utf-8')
    const { data: fm } = matter(raw)
    if (!fm.current_date) {
      console.log('⚠️  Add current_date, next_full_moon, days_remaining to Campaign Calendar.md frontmatter')
      return null
    }
    return parseCalendar(fm)
  } catch (e) {
    console.log('⚠️  Could not read Campaign Calendar.md:', e.message)
    return null
  }
}

// ── Downloads ("Resource Library") page ───────────────────────
async function buildDownloadsPage(css) {
  const folderName = config.downloadsFolder
  if (!folderName) return

  const srcDir = path.join(CONTENT, folderName)
  const dstDir = path.join(OUTPUT, 'downloads')
  const labels = config.downloadLabels || {}

  // Collect actual files in the folder
  let files = []
  try {
    const entries = await fs.readdir(srcDir, { withFileTypes: true })
    files = entries
      .filter(e => e.isFile() && !e.name.startsWith('.'))
      .map(e => e.name)
      .sort((a, b) => a.localeCompare(b))
  } catch (_) { /* folder doesn't exist yet */ }

  // Copy the files to the published site
  if (await fs.pathExists(srcDir)) {
    await fs.copy(srcDir, dstDir, {
      filter: src => !path.basename(src).startsWith('.')
    })
  }

  const prettify = n => n
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .trim()
    .replace(/\b\w/g, c => c.toUpperCase())

  const items = files.map(name => {
    const ext   = (path.extname(name).slice(1) || 'file').toUpperCase()
    const meta  = labels[name] || {}
    const title = meta.title || prettify(name)
    const desc  = meta.description || ''
    const href  = `${config.site.baseUrl}/downloads/${encodeURIComponent(name)}`
    return `<li class="download">
      <span class="dl-type">${ext}</span>
      <div class="dl-body"><h3>${title}</h3>${desc ? `<p>${desc}</p>` : ''}</div>
      <a class="dl-btn" href="${href}" download>Download</a>
    </li>`
  })

  const listHTML = items.length
    ? `<ul class="downloads">${items.join('')}</ul>`
    : `<p class="empty-msg">No downloads yet. Drop files into <code>content/${folderName}</code> in your vault, then commit &amp; push — they'll appear here automatically.</p>`

  const html = buildPage({
    title:    'Downloads',
    subtitle: config.downloadsDescription || null,
    tags: [], breadcrumb: [], toc: [],
    content: listHTML, sessions: [], css,
    layout: 'section', eyebrow: 'Resource Library'
  })

  await fs.ensureDir(dstDir)
  await fs.writeFile(path.join(dstDir, 'index.html'), html)
  console.log(`📥 Downloads page: ${items.length} file(s)`)
}

// ── Maps gallery page ─────────────────────────────────────────
async function buildMapsPage(css) {
  const folderName = config.mapsFolder
  if (!folderName) return

  const srcDir  = path.join(CONTENT, folderName)
  const dstDir  = path.join(OUTPUT, 'maps')
  const labels  = config.mapLabels || {}
  const imageRe = /\.(png|jpe?g|webp|gif|svg)$/i

  let files = []
  try {
    const entries = await fs.readdir(srcDir, { withFileTypes: true })
    files = entries
      .filter(e => e.isFile() && imageRe.test(e.name))
      .map(e => e.name)
      .sort((a, b) => a.localeCompare(b))
  } catch (_) { /* folder doesn't exist yet */ }

  if (await fs.pathExists(srcDir)) {
    await fs.copy(srcDir, dstDir, { filter: src => !path.basename(src).startsWith('.') })
  }

  const prettify = n => n
    .replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ').trim()
    .replace(/\b\w/g, c => c.toUpperCase())

  const figures = files.map(name => {
    const meta  = labels[name] || {}
    const title = meta.title || prettify(name)
    const desc  = meta.description || ''
    const href  = `${config.site.baseUrl}/maps/${encodeURIComponent(name)}`
    return `<figure class="map-figure">
      <a href="${href}" target="_blank" rel="noopener"><img src="${href}" alt="${title}" loading="lazy"></a>
      <figcaption><strong>${title}</strong>${desc ? `<br>${desc}` : ''}</figcaption>
    </figure>`
  })

  const galleryHTML = figures.length
    ? `<div class="gallery">${figures.join('')}</div>`
    : `<p class="empty-msg">No maps yet. Drop image files into <code>content/${folderName}</code> in your vault, then commit &amp; push.</p>`

  const html = buildPage({
    title: 'Maps',
    subtitle: config.mapsDescription || null,
    tags: [], breadcrumb: [], toc: [],
    content: galleryHTML, sessions: [], css,
    layout: 'section', eyebrow: 'Atlas'
  })

  await fs.ensureDir(dstDir)
  await fs.writeFile(path.join(dstDir, 'index.html'), html)
  console.log(`🗺️  Maps page: ${figures.length} map(s)`)
}

// ── Tags pages (index cloud + one page per tag) ───────────────
async function buildTagPages(css) {
  const base = config.site.baseUrl
  const tags = [...tagIndex.values()].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: 'base' })
  )

  // Per-tag pages
  for (const t of tags) {
    const pages = t.pages
      .slice()
      .sort((a, b) => a.title.localeCompare(b.title))
    const grid = `<div class="index-grid">` +
      pages.map(p =>
        `<a href="${p.href}" class="index-card"><div class="ic-title">${p.title}</div></a>`
      ).join('') +
    `</div>`

    const count = pages.length
    const html = buildPage({
      title: t.name,
      subtitle: `${count} ${count === 1 ? 'page' : 'pages'} tagged “${t.name}”.`,
      tags: [], breadcrumb: [{ label: 'Tags', url: `${base}/tags/` }],
      toc: [], content: grid, sessions: [], css,
      layout: 'section', eyebrow: 'Tag'
    })
    const outPath = path.join(OUTPUT, 'tags', t.slug, 'index.html')
    await fs.ensureDir(path.dirname(outPath))
    await fs.writeFile(outPath, html)
  }

  // Tag-cloud index page
  const cloud = tags.length
    ? `<div class="tag-cloud">` +
        tags.map(t =>
          `<a href="${base}/tags/${t.slug}/" class="tag">${t.name} <span class="tag-count">${t.pages.length}</span></a>`
        ).join('') +
      `</div>`
    : `<p class="empty-msg">No tags yet. Add <code>tags:</code> to a note's frontmatter in your vault and they'll appear here.</p>`

  const indexHTML = buildPage({
    title: 'Tags',
    subtitle: 'Browse the vault by subject — click any tag to see its pages.',
    tags: [], breadcrumb: [], toc: [],
    content: cloud, sessions: [], css,
    layout: 'section', eyebrow: 'Index'
  })
  await fs.ensureDir(path.join(OUTPUT, 'tags'))
  await fs.writeFile(path.join(OUTPUT, 'tags', 'index.html'), indexHTML)
  console.log(`🏷️  Tags page: ${tags.length} tag(s)`)
}

// ── Main ──────────────────────────────────────────────────────
async function main() {
  console.log('\n🏰 Building The Candlekeep Vault...\n')

  await fs.emptyDir(OUTPUT)

  const css      = await fs.readFile(STYLES, 'utf-8')
  const files    = await scan()
  const sessions = await getSessions()
  const search   = []
  let count      = 0

  // Render all content pages
  for (const f of files) {
    const result = await renderFile(f, sessions, css)
    if (!result) continue
    await fs.ensureDir(path.dirname(result.outputPath))
    await fs.writeFile(result.outputPath, result.page)
    search.push(result.searchEntry)
    count++
  }

  console.log(`📄 Rendered ${count} pages`)

  // Render section index pages
  for (const item of config.explore) {
    const { html, outPath } = await renderSectionIndex(item.label, item.folder, sessions, css)
    await fs.ensureDir(path.dirname(outPath))
    await fs.writeFile(outPath, html)
  }
  console.log(`📂 Rendered ${config.explore.length} section indexes`)

  // Home page
  const calendar = await readCalendar()
  const calBanner = buildCalendarBanner(calendar)
  const homeMd = path.join(CONTENT, 'index.md')
  if (await fs.pathExists(homeMd)) {
    const result = await renderFile(homeMd, sessions, css, { isHome: true })
    if (result) {
      // Inject calendar banner at the top of home page content
      const homeHTML = result.page.replace(
        '<div class="content">',
        `${calBanner}<div class="content">`
      )
      await fs.writeFile(path.join(OUTPUT, 'index.html'), homeHTML)
      console.log('🏠 Home page built')
      if (calendar && calendar.currentDate) {
        console.log(`📅 Calendar: ${calendar.currentDate}`)
      } else {
        console.log('⚠️  Calendar found but could not parse date values')
      }
    }
  }

  // Build subfolder index pages (fixes back-button 404s)
  await buildAllSubfolderIndexes(sessions, css)

  // Copy attachments (images used in pages)
  const attachSrc = path.join(CONTENT, 'z_Attachments')
  const attachDst = path.join(OUTPUT, 'attachments')
  if (await fs.pathExists(attachSrc)) {
    await fs.copy(attachSrc, attachDst)
    console.log('📎 Attachments copied')
  }

  // Downloads ("Resource Library") page
  await buildDownloadsPage(css)

  // Maps gallery
  await buildMapsPage(css)

  // Tags pages
  await buildTagPages(css)

  // Search index
  await fs.writeJson(path.join(OUTPUT, 'search-index.json'), search)
  console.log(`🔍 Search index: ${search.length} entries`)

  console.log('\n✨ Build complete — output in /public\n')
}

main().catch(err => {
  console.error('\n❌ Build failed:', err.message)
  console.error(err.stack)
  process.exit(1)
})
