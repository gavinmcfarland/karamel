import mole from 'mole'

import width from './parts/width'
import maxWidth from './parts/max-width'
import margin from './parts/margin'
import colorScheme from './parts/color-scheme'
import padding from './parts/padding'
import fontStyle from './parts/font-style';

// import parts from './models/parts';

// mole.add(...width)
// mole.add(...parts)
mole.add(...margin)
mole.add(...padding)
mole.add(...width)
mole.add(...maxWidth)
mole.add(...colorScheme)
mole.add(...fontStyle)

mole.build()

// mole.build()
