// Sitemap population
'use strict';

const fs = require('fs');

// Module Export
module.exports = () => {
  const pages = {};
  const walkSync = (dir) => {
    // Pages
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      // Pages path
      const filePath = `${dir}${file}`;
      // Pages stats
      const fileStat = fs.statSync(filePath);

      // Recursive navigation
      if (fileStat.isDirectory()) {
        walkSync(`${filePath}/`);
      } else {
        // Page pathname - "pages" directory and extensions excluded
        const nomeFile = filePath
            .substr(0, filePath.lastIndexOf('.'))
            .replace('pages/', '');

        // Create sitemap page node and last modify
        pages[`/${nomeFile}`] = {
          page: `/${nomeFile}`,
          lastModified: fileStat.mtime,
        };
      }
    });
  };

  // Recursive sitemap population
  walkSync('pages/');

  return pages;
};
