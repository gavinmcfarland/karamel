"use strict";

module.exports = {
  theme: 'default-theme.jsonnet',
  template: ['width', 'height', 'margin', 'max-width', 'padding', 'font-size', 'font-color', 'flex', 'font-style', 'color-theme', 'z-index'],
  output: {
    file: '../dist/utilities.css'
  }
};