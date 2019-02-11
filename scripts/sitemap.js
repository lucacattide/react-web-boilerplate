// Popolamento sitemap
'use strict';

const fs = require('fs');

// Esportazione Modulo
module.exports = () => {
  const pagine = {};
  const walkSync = (dir) => {
    // Pagine
    const files = fs.readdirSync(dir);

    files.forEach((file) => {
      // Path pagina
      const filePath = `${dir}${file}`;
      // Statistiche pagina
      const fileStat = fs.statSync(filePath);

      // Navigazione ricorsiva
      if (fileStat.isDirectory()) {
        walkSync(`${filePath}/`);
      } else {
        // Pathname pagina - esclusa cartella "pages" ed estensioni
        const nomeFile = filePath
            .substr(0, filePath.lastIndexOf('.'))
            .replace('pages/', '');

        // Crea nodo sitemap pagina ed ultima modifica
        pagine[`/${nomeFile}`] = {
          page: `/${nomeFile}`,
          lastModified: fileStat.mtime,
        };
      }
    });
  };

  // Popola la sitemap ricorsivamente
  walkSync('pages/');

  return pagine;
};
