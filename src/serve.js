// ============================================================
// The Candlekeep Vault — Local Preview Server
// Run: npm run serve
// Then open: http://localhost:8080/candlekeep-vault/
// ============================================================

const http = require('http')
const fs   = require('fs')
const path = require('path')
const config = require('./config')

const OUTPUT = path.join(__dirname, '..', 'public')
const PORT   = 8080
const BASE   = config.site.baseUrl  // e.g. "/candlekeep-vault"

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'text/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
}

const server = http.createServer((req, res) => {
  // Strip base URL prefix
  let urlPath = req.url.split('?')[0]
  if (urlPath.startsWith(BASE)) urlPath = urlPath.slice(BASE.length)
  if (!urlPath || urlPath === '/') urlPath = '/index.html'
  if (!path.extname(urlPath)) urlPath = urlPath.replace(/\/?$/, '/index.html')

  const filePath = path.join(OUTPUT, decodeURIComponent(urlPath))
  const ext      = path.extname(filePath)

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      res.end('<h1>404 — Not Found</h1><p>Run <code>npm run build</code> first.</p>')
      return
    }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' })
    res.end(data)
  })
})

server.listen(PORT, () => {
  console.log(`\n🏰 The Candlekeep Vault`)
  console.log(`   http://localhost:${PORT}${BASE}/\n`)
  console.log('   Press Ctrl+C to stop\n')
})
