import mole from 'mole'

import width from './parts/width'
import maxWidth from './parts/max-width'
import margin from './parts/margin'
import colorTheme from './parts/color-theme'
import padding from './parts/padding'
import fontStyle from './parts/font-style';
import flex from './parts/flex';
import fontSize from './parts/font-size';
import height from './parts/height';
import fontColor from './parts/font-color';
import zIndex from './parts/z-index';

// import parts from './models/parts';

// mole.add(...width)
// mole.add(...parts)
mole.add(...margin)
mole.add(...padding)
mole.add(...width)
mole.add(...maxWidth)
mole.add(...colorTheme)
mole.add(...fontStyle)
mole.add(...fontSize)
mole.add(...flex)
mole.add(...height)
mole.add(...fontColor)
mole.add(...zIndex)

// fs.readFile('src/app.css', (err, css) => {
// 	postcss([precss, autoprefixer])
// 		.process(css, { from: 'src/app.css', to: 'dest/app.css' })
// 		.then(result => {
// 			fs.writeFile('dest/app.css', result.css, () => true)
// 			if (result.map) {
// 				fs.writeFile('dest/app.css.map', result.map, () => true)
// 			}
// 		})
// })

mole.build()

// mole.build()
