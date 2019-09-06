<p align="center"><img src="logo.png" width="240"></p>

<p align="center">
    <a href="https://www.npmjs.com/package/karamel"><img src="https://img.shields.io/npm/v/karamel.svg"></a>
    <a href="https://travis-ci.org/limitlessloop/karamel"><img src="https://img.shields.io/travis/limitlessloop/karamel.svg"></a>
    <!-- <a href="https://discord.gg/BDEvF8m"><img src="https://img.shields.io/discord/617327499554193445"></a>     -->
</p>

<!-- [![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Discord][discord-img]][discord-url] -->

<hr />

Karamel is a CSS framework that is customisable and simple to use.

> Karamel is currently in alpha and it's features are still evolving.

## Usage

Download directly from a CDN using unpkg

```bash
https://unpkg.com/karamel/dist/karamel.css
```

<!-- ### Customise -->

Or use in your node project using the following

```bash
npm install karamel
```

And in your stylesheets using PostCSS import

```css
@import 'karamel'
```

<!-- Customise with a theme file at the root of your project called `karamel.theme.jsonnet`.

You can use the command line tool to create a base file.

```bash
npm karamel init
```

Which will create a blank theme at the root of your project

```js
// karamel.theme.jsonnet
{
    color: {},
    size: {},
    font: {}
}
``` -->

<!-- Add PostCSS plugin

```js
// Using postcss.config.js
module.exports = {
  plugins: [
    require('karamel')
  ]
}
``` -->

## Docs

View available class names and what they do in the [docs](https://github.com/limitlessloop/karamel/blob/master/DOCS.md).
