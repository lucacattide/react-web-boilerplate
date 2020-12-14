// Module Start
// Tailwind - Configuration
// JS imports
const preset = require('./tailwind-preset.js');

// Module export
module.exports = {
  // Production build optimization
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false,
  // Default configuration
  presets: [preset],
  // Project specific options
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
// Module End
