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
      const title   = rawTitle || (type.charAt(0).toUpperCase() + type.slice(1))
      const bodyLines = []

      i++
      while (i < lines.length && lines[i].startsWith('>')) {
        bodyLines.push(lines[i].replace(/^>\s?/, ''))
        i++
      }

      const body = marked.parse(bodyLines.join('\n'))
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
  }

  console.log(`✅ ${registry.size} pages indexed`)
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
      const simpleBody  = embedBody.replace(/!\[\[[^\]]+\]\]/g, '')
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
async function renderFile(filePath, sessions, css) {
  const raw          = await fs.readFile(filePath, 'utf-8')
  const { data: fm, content: body } = matter(raw)

  if (isDMOnly(fm)) return null

  const urlPath = toUrlPath(filePath)
  const name    = path.basename(filePath, '.md')
  const title   = fm.title || name

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
    content: html, sessions, css
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
          const { data: fm } = matter(raw)
          if (isDMOnly(fm)) continue
          const n    = e.name.replace('.md', '')
          const t    = fm.title || n
          const urlP = toUrlPath(full)
          cards.push({ title: t, href: toHref(urlP), group: groupLabel })
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
          </a>`
        ).join('') +
      `</div>`
    }
  }

  const html = buildPage({
    title: label, subtitle: null, tags: [], breadcrumb: [],
    toc: [], content: gridHTML, sessions, css
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
          const { data: fm } = matter(raw)
          if (isDMOnly(fm)) continue
          const n = c.name.replace('.md', '')
          cards.push({ title: fm.title || n, href: toHref(toUrlPath(cfull)) })
        }
      }

      if (cards.length > 0) {
        const gridHTML = `<div class="index-grid">` +
          cards.map(c =>
            `<a href="${c.href}" class="index-card">
              <div class="ic-title">${c.title}</div>
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
          content: gridHTML, sessions, css
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
function parseCalendar(content) {
  const extract = (label) => {
    const regex = new RegExp(`\\|\\*\\*${label}\\*\\*\\|([^|]+)\\|`)
    const match = content.match(regex)
    return match ? match[1].trim() : null
  }
  return {
    currentDate:   extract('Full Date'),
    nextFullMoon:  extract('Next Full Moon'),
    daysRemaining: extract('Days Remaining'),
    month:         extract('Month'),
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
    const { content } = matter(raw)
    return parseCalendar(content)
  } catch (_) {
    return null
  }
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
    const result = await renderFile(homeMd, sessions, css)
    if (result) {
      // Inject calendar banner at the top of home page content
      const homeHTML = result.page.replace(
        '<div class="content">',
        `${calBanner}<div class="content">`
      )
      await fs.writeFile(path.join(OUTPUT, 'index.html'), homeHTML)
      console.log('🏠 Home page built')
      if (calendar) console.log(`📅 Calendar: ${calendar.currentDate}`)
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
