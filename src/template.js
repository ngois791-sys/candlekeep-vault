// ============================================================
// The Candlekeep Vault — HTML Template
// ============================================================

const config = require('./config')

// Build the sidebar navigation HTML
function buildNavHTML(sessions) {
  const base = config.site.baseUrl

  let html = `<div class="nav-section">
    <div class="nav-label">Explore</div>`

  for (const item of config.explore) {
    const href = `${base}/${encodeURI(item.folder)}/`
    html += `<a href="${href}" class="nav-item">${item.label}</a>`
  }

  html += `</div><hr class="nav-divider">`
  html += `<div class="nav-section"><div class="nav-label">Sessions</div>`

  if (sessions.length === 0) {
    html += `<span class="nav-item nav-empty">No sessions yet</span>`
  } else {
    for (const s of sessions) {
      html += `<a href="${s.url}" class="nav-item">${s.label}</a>`
    }
  }

  html += `</div>`
  return html
}

// Build right-side table of contents HTML
function buildTOCHTML(toc) {
  if (!toc || toc.length === 0) return ''
  let html = `<div class="toc"><div class="toc-label">On this page</div><div class="toc-items">`
  for (const item of toc) {
    const subClass = item.level === 3 ? ' toc-sub' : ''
    html += `<a href="#${item.id}" class="toc-item${subClass}">${item.text}</a>`
  }
  html += `</div></div>`
  return html
}

// Build tag pills HTML
function buildTagsHTML(tags) {
  if (!tags || tags.length === 0) return ''
  const filtered = tags.filter(t => t.toLowerCase() !== config.dmOnlyTag)
  if (filtered.length === 0) return ''
  const base = config.site.baseUrl
  return `<div class="tags">` +
    filtered.map(tag =>
      `<span class="tag">${tag}</span>`
    ).join('') +
  `</div>`
}

// Build breadcrumb HTML
function buildBreadcrumbHTML(breadcrumb) {
  if (!breadcrumb || breadcrumb.length === 0) return ''
  // Show a back button pointing to the immediate parent
  const parent = breadcrumb[breadcrumb.length - 1]
  const backBtn = parent
    ? `<a href="${parent.url}" class="back-btn">← ${parent.label}</a>`
    : ''
  // Full trail
  const trail = breadcrumb.map((b, i) =>
    i < breadcrumb.length - 1
      ? `<a href="${b.url}">${b.label}</a> <span class="sep">›</span> `
      : `<span>${b.label}</span>`
  ).join('')
  return `<div class="breadcrumb-wrap">${backBtn}<div class="breadcrumb">${trail}</div></div>`
}

// Shared search + nav JS (inlined into every page)
function sharedJS() {
  const base = config.site.baseUrl
  return `
    // ── Search ───────────────────────────────────────────────
    let searchIndex = null

    async function loadIndex() {
      try {
        const r = await fetch('${base}/search-index.json')
        searchIndex = await r.json()
      } catch(e) {}
    }
    loadIndex()

    function openSearch() {
      document.getElementById('search-modal').classList.add('open')
      setTimeout(() => document.getElementById('search-input').focus(), 50)
    }

    function closeSearch() {
      document.getElementById('search-modal').classList.remove('open')
      document.getElementById('search-input').value = ''
      document.getElementById('search-results').innerHTML = ''
    }

    function closeOnBackdrop(e) {
      if (e.target.id === 'search-modal') closeSearch()
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeSearch()
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); openSearch() }
    })

    function doSearch(q) {
      const el = document.getElementById('search-results')
      if (!q || q.length < 2) { el.innerHTML = ''; return }
      if (!searchIndex) { el.innerHTML = '<div class="no-results">Loading...</div>'; return }
      const matches = searchIndex
        .filter(p => p.title.toLowerCase().includes(q.toLowerCase()) ||
                     p.excerpt.toLowerCase().includes(q.toLowerCase()))
        .slice(0, 10)
      if (!matches.length) { el.innerHTML = '<div class="no-results">No pages found.</div>'; return }
      el.innerHTML = matches.map(p => \`
        <a href="\${p.url}" class="search-result" onclick="closeSearch()">
          <div class="sr-title">\${p.title}</div>
          <div class="sr-excerpt">\${p.excerpt.slice(0, 110)}...</div>
        </a>
      \`).join('')
    }

    // ── Mobile nav ───────────────────────────────────────────
    function toggleNav() {
      document.getElementById('nav-inner').classList.toggle('open')
    }

    // ── Active nav link ──────────────────────────────────────
    const here = window.location.pathname
    document.querySelectorAll('.nav-item').forEach(a => {
      if (here.startsWith(a.getAttribute('href'))) a.classList.add('active')
    })
  `
}

// Search modal HTML (same on every page)
function searchModalHTML() {
  return `
  <div class="search-modal" id="search-modal" onclick="closeOnBackdrop(event)">
    <div class="search-box">
      <input
        id="search-input"
        class="search-input"
        type="text"
        placeholder="Search the vault..."
        oninput="doSearch(this.value)"
        autocomplete="off"
      >
      <div class="search-results" id="search-results"></div>
    </div>
  </div>`
}

// Full page HTML — used for every page
function buildPage({ title, subtitle, tags, breadcrumb, toc, content, sessions, css }) {
  const navHTML   = buildNavHTML(sessions)
  const tocHTML   = buildTOCHTML(toc)
  const tagsHTML  = buildTagsHTML(tags)
  const crumbHTML = buildBreadcrumbHTML(breadcrumb)
  const base      = config.site.baseUrl

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | ${config.site.title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Crimson+Pro:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>

  <!-- ── Top Bar ─────────────────────────────────────────── -->
  <header class="topbar">
    <a href="${base}/" class="site-title">
      <span class="site-emoji">${config.site.emoji}</span>
      <span class="title-main">The Candlekeep</span>
      <span class="title-sub">Vault</span>
    </a>
    <button class="search-btn" onclick="openSearch()">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
      Search the vault...
    </button>
  </header>

  <div class="layout">

    <!-- ── Left Sidebar ──────────────────────────────────── -->
    <nav class="sidebar">
      <button class="mob-toggle" onclick="toggleNav()">☰ Menu</button>
      <div class="nav-inner" id="nav-inner">
        ${navHTML}
      </div>
    </nav>

    <!-- ── Main Content ───────────────────────────────────── -->
    <main class="main">
      ${crumbHTML}
      <h1 class="page-title">${title}</h1>
      ${subtitle ? `<p class="page-subtitle">${subtitle}</p>` : ''}
      ${tagsHTML}
      <div class="content">
        ${content}
      </div>
    </main>

    <!-- ── Right TOC ──────────────────────────────────────── -->
    ${tocHTML ? `<aside class="toc-sidebar">${tocHTML}</aside>` : ''}

  </div>

  <!-- ── Footer ─────────────────────────────────────────── -->
  <footer class="footer">
    <span class="footer-brand">✦ ${config.site.title} ✦</span>
    <span class="footer-tagline">${config.site.footer}</span>
  </footer>

  ${searchModalHTML()}

  <script>${sharedJS()}</script>
</body>
</html>`
}

module.exports = { buildPage }
