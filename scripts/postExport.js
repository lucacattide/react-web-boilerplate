// Sitemap generation
'use strict';

const fs = require('fs-extra');
const sitemap = require('./sitemap');
const dateFormat = require('./dateFormat');
// Data fetching
const data = sitemap();
const today = dateFormat(new Date());
// Sitemap initialization
// TODO: Change with real domain
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(data).map(
      (path) => `<url>
    <loc>https://<dominio>${path}</loc>
    <lastmod>${
      data[path].lastModified
      ? dateFormat(new Date(data[path].lastModified))
      : today
}</lastmod>
    </url>`
  )}
</urlset>`;

// Output
fs.writeFileSync('out/sitemap.xml', sitemapXml);
