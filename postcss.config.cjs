const tailwind = require("tailwindcss");
const cssnano = require("cssnano");
const postcssImport = require("postcss-import");
const presetEnv = require("postcss-preset-env")({
  features: {
    "nesting-rules": true, // Optional, not necessary. Read details about it here: https://tabatkins.github.io/specs/css-nesting/#motivation
  },
});
const autoprefixer = require("autoprefixer");

const plugins =
  process.env.NODE_ENV === "production"
    ? [postcssImport, tailwind, presetEnv, autoprefixer, cssnano]
    : [postcssImport, tailwind, presetEnv];

module.exports = { plugins };
