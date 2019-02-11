// Next - Configurazione
'use strict';

const withSass = require('@zeit/next-sass');
const autoprefixer = require('autoprefixer');
const fs = require('fs');
const {join} = require('path');
const {promisify} = require('util');
const copyFile = promisify(fs.copyFile);

module.exports = withSass({
  // CSS
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]',
    sourceMaps: true,
  },
  postcssLoaderOptions: {
    sourceMap: true,
    ident: 'postcss',
    plugins: () => [
      autoprefixer,
    ],
  },
  sassLoaderOptions: {
    sourceMap: true,
    includePaths: [
      'node_modules/compass-mixins/lib',
      'sass',
    ],
  },
  // JS
  webpack: (config, {}) => {
    config.externals.push({
      // jQuery
      jquery: 'jQuery'
    })

    return config
  },
  // Esportazione files
  exportPathMap: async function(defaultPathMap, {dev, dir, outDir}) {
    const sitemap = {
      '/': {page: '/'},
    }

    if (dev) {
      return defaultPathMap
    } else {
      await Promise.all([
        copyFile(join(dir, 'robots.txt'), join(outDir, 'robots.txt')),
        copyFile(join(dir, '.htaccess'), join(outDir, '.htaccess')),
        copyFile(join(dir, 'cookies-notifica.php'), join(outDir, 'cookies-notifica.php')),
        copyFile(join(dir, 'csp_report.php'), join(outDir, 'csp_report.php'))
      ])

      return sitemap
    }
  }
})
