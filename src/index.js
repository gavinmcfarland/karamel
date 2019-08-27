import mole from 'mole'

import width from './parts/width'
import maxWidth from './parts/max-width'
import margin from './parts/margin'
import colorScheme from './parts/color-scheme'
import padding from './parts/padding'
import fontStyle from './parts/font-style';
import flex from './parts/flex';
import fontSize from './parts/font-size';

// import parts from './models/parts';

// mole.add(...width)
// mole.add(...parts)
mole.add(...margin)
mole.add(...padding)
mole.add(...width)
mole.add(...maxWidth)
mole.add(...colorScheme)
mole.add(...fontStyle)
mole.add(...fontSize)
mole.add(...flex)

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
