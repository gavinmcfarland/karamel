
import mole from 'mole'
// import fs from 'fs'
// import postcss from 'postcss'
// import atImport from 'postcss-import'
// import customSelectors from 'postcss-custom-selectors'
// import extend from 'postcss-extend-rule'
// import matches from 'postcss-selector-matches'
// import autoprefixer from 'autoprefixer'
// import precss from 'precss'

import fontSize from './vars/font-size/index.js';


// import parts from './models/parts';
mole.config('src/mole.config.js')


mole.theme('karamel.theme.jsonnet')

mole.use(...fontSize)

// console.log(mole.debug.theme)

// mole.build()

// // Need an option to avoid build and just output string to pass straight to postcss

// export function buildPostCSS(input, output) {
// 	fs.readFile(input, (err, css) => {
// 		postcss([atImport, customSelectors, extend, matches])
// 			.process(css, { from: input, to: output })
// 			.then(result => {
// 				fs.writeFile(output, result.css, () => true)
// 				if (result.map) {
// 					fs.writeFile(output + '.map', result.map, () => true)
// 				}
// 			})
// 	})
// }

// buildPostCSS('./src/styles/utilities.css', './dist/karamel/utilities.css')
// buildPostCSS('./src/styles/normalize.css', './dist/karamel/normalize.css')
// buildPostCSS('./src/styles/main.css', './dist/karamel/index.css')

// buildPostCSS('./src/styles/utilities.css', './utilities.css')
// buildPostCSS('./src/styles/normalize.css', './normalize.css')

// console.log(mole.debug)
