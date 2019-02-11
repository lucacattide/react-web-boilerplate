// Generazione ed esportazione sitemap
'use strict';

const fs = require('fs-extra');
const sitemap = require('./sitemap');
const formattaData = require('./formattaData');
// Data fetching
const dati = sitemap();
const oggi = formattaData(new Date());
// Inizializzazione sitemap
// TODO: Sostituire con dominio reale
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${Object.keys(dati).map(
      (path) => `<url>
    <loc>https://<dominio>${path}</loc>
    <lastmod>${
      dati[path].lastModified
      ? formattaData(new Date(dati[path].lastModified))
      : oggi
}</lastmod>
    </url>`
  )}
</urlset>`;

// Output
fs.writeFileSync('out/sitemap.xml', sitemapXml);
