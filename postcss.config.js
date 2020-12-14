// Module Start
// PostCSS - Configuration
// Module export
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-focus-visible': {},
    'postcss-nested': {
      bubble: ['apply', 'screen'],
      unwrap: ['apply', 'screen'],
    },
    'postcss-custom-properties': {},
    autoprefixer: {},
  },
};
// Module End
