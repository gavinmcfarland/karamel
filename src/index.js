import mole from 'mole'

import width from './parts/width'
import padding from './parts/padding'
import fontStyle from './parts/font-style';

mole.add(...width)
mole.add(...padding)
mole.add(...fontStyle)

mole.build()

// mole.build()
