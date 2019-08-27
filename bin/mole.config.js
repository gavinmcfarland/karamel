"use strict";

module.exports = {
  theme: 'default-theme.jsonnet',
  template: ['width', 'height', 'margin', 'max-width', 'padding', 'font-size', 'font-color', 'flex', 'font-style', 'color-theme'],
  output: {
    file: '/dist/karamel.css'
  }
};