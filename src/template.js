// ============================================================
// The Candlekeep Vault — HTML Template
// Art-deco / dark-academia layout (Eberron-style) in Candlekeep colors
// ============================================================

const config = require('./config')

// ── Top navigation ───────────────────────────────────────────
function buildNavHTML() {
  const base = config.site.baseUrl
  const links = config.explore.map(item =>
    `<a href="${base}/${encodeURI(item.folder)}/">${item.label}</a>`
  )
  // Sessions section index (built automatically for the sessions folder)
  links.push(`<a href="${base}/${encodeURI(config.sessionsFolder)}/">Sessions</a>`)
  return `<nav class="site-nav">${links.join('')}</nav>`
}

// ── Tag pills ─────────────────────────────────────────────────
function buildTagsHTML(tags) {
  if (!tags || tags.length === 0) return ''
  const filtered = tags.filter(t => t.toLowerCase() !== config.dmOnlyTag)
  if (filtered.length === 0) return ''
  return `<div class="tags">` +
    filtered.map(tag => `<span class="tag">${tag}</span>`).join('') +
  `</div>`
}

// Immediate parent section (last breadcrumb entry), if any
function parentOf(breadcrumb) {
  if (!breadcrumb || breadcrumb.length === 0) return null
  return breadcrumb[breadcrumb.length - 1]
}

// Eyebrow label above a title (the section the page lives in)
function eyebrowHTML(breadcrumb, fallback) {
  const parent = parentOf(breadcrumb)
  const label = parent ? parent.label : fallback
  if (!label) return ''
  return `<div class="eyebrow">${label}</div>`
}

// "← back to parent" link
function backLinkHTML(breadcrumb) {
  const parent = parentOf(breadcrumb)
  if (!parent) return ''
  return `<a class="back-link" href="${parent.url}">← ${parent.label}</a>`
}

// ── Page-head variants ────────────────────────────────────────
function headerForLayout(layout, { title, subtitle, tags, breadcrumb }) {
  const tagsHTML = buildTagsHTML(tags)

  if (layout === 'home') {
    return `
      <section class="hero">
        <div class="ornament">◆ ◆ ◆</div>
        <h1>${title}</h1>
        ${subtitle ? `<p class="lede">${subtitle}</p>` : ''}
        <div class="hero-rule"></div>
      </section>`
  }

  if (layout === 'section') {
    return `
      <header class="section-head">
        ${eyebrowHTML(breadcrumb, 'Explore')}
        <h1>${title}</h1>
        ${subtitle ? `<p>${subtitle}</p>` : ''}
      </header>`
  }

  // entry (default)
  return `
    ${eyebrowHTML(breadcrumb, '')}
    <h1 class="entry-title">${title}</h1>
    ${subtitle ? `<p class="entry-subtitle">${subtitle}</p>` : ''}
    ${tagsHTML}`
}

// ── Home-page section cards ───────────────────────────────────
function buildHomeSectionsHTML() {
  const base = config.site.baseUrl
  const cards = config.explore.map(item => ({
    label: item.label,
    href:  `${base}/${encodeURI(item.folder)}/`,
    desc:  item.description || ''
  }))
  cards.push({
    label: 'Sessions',
    href:  `${base}/${encodeURI(config.sessionsFolder)}/`,
    desc:  config.sessionsDescription || ''
  })

  return `
    <section class="home-sections">
      <div class="eyebrow">Explore the Vault</div>
      <div class="index-grid">
        ${cards.map(c =>
          `<a class="index-card" href="${c.href}">
            <div class="ic-title">${c.label}</div>
            ${c.desc ? `<div class="ic-desc">${c.desc}</div>` : ''}
          </a>`
        ).join('')}
      </div>
    </section>`
}

// ── Shared search + nav JS ────────────────────────────────────
function sharedJS() {
  const base = config.site.baseUrl
  return `
    let searchIndex = null
    fetch('${base}/search-index.json').then(r => r.json()).then(d => searchIndex = d).catch(()=>{})

    function doSearch(q) {
      const box = document.getElementById('search-results')
      q = (q || '').trim()
      if (q.length < 2) { box.hidden = true; box.innerHTML = ''; return }
      if (!searchIndex) { box.hidden = false; box.innerHTML = '<span class="sr-empty">Loading…</span>'; return }
      const ql = q.toLowerCase()
      const hits = searchIndex
        .filter(p => p.title.toLowerCase().includes(ql) || p.excerpt.toLowerCase().includes(ql))
        .slice(0, 8)
      if (!hits.length) { box.hidden = false; box.innerHTML = '<span class="sr-empty">No pages found.</span>'; return }
      box.hidden = false
      box.innerHTML = hits.map(p =>
        '<a href="' + p.url + '"><span class="sr-title">' + p.title + '</span>' +
        '<span class="sr-section">' + p.excerpt.slice(0, 60) + '…</span></a>'
      ).join('')
    }

    document.addEventListener('click', e => {
      const wrap = document.querySelector('.site-search')
      if (wrap && !wrap.contains(e.target)) document.getElementById('search-results').hidden = true
    })
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') { const b = document.getElementById('search-results'); if (b) b.hidden = true }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); const i = document.getElementById('search-input'); if (i) i.focus() }
    })

    // Highlight the active top-nav link
    const here = decodeURIComponent(window.location.pathname)
    document.querySelectorAll('.site-nav a').forEach(a => {
      const href = decodeURIComponent(a.getAttribute('href'))
      if (href !== '${base}/' && here.startsWith(href)) a.classList.add('active')
    })
  `
}

// ── Full page ─────────────────────────────────────────────────
function buildPage({ title, subtitle, tags, breadcrumb, toc, content, sessions, css, layout = 'entry' }) {
  const base    = config.site.baseUrl
  const navHTML = buildNavHTML()
  const head    = headerForLayout(layout, { title, subtitle, tags, breadcrumb })
  const back    = layout === 'entry' ? backLinkHTML(breadcrumb) : ''
  const wrapClass = layout === 'entry' ? 'wrap entry' : 'wrap'

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${config.site.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>

  <header class="site-header">
    <div class="wrap header-inner">
      <a href="${base}/" class="brand">
        <span class="brand-mark">${config.site.emoji}</span>
        ${config.site.title}
      </a>
      <button class="nav-toggle" aria-label="Toggle navigation"
              onclick="document.body.classList.toggle('nav-open')">☰</button>
      ${navHTML}
      <div class="site-search">
        <input id="search-input" type="text" placeholder="Search…"
               autocomplete="off" oninput="doSearch(this.value)">
        <div id="search-results" class="search-results" hidden></div>
      </div>
    </div>
  </header>

  <main class="site-main">
    <div class="${wrapClass}">
      ${head}
      <div class="content">
        ${content}
      </div>
      ${layout === 'home' ? buildHomeSectionsHTML() : ''}
      ${back}
    </div>
  </main>

  <footer class="site-footer">
    <p class="footer-brand">✦ ${config.site.title} ✦</p>
    <p class="footer-tagline">${config.site.footer}</p>
  </footer>

  <script>${sharedJS()}</script>
</body>
</html>`
}

module.exports = { buildPage }
