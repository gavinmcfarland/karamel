import mole from 'mole'

import width from './parts/width'
import padding from './parts/padding'
import fontStyle from './parts/font-style';
// import parts from './models/parts';

// mole.add(...width)
// mole.add(...parts)
mole.add(...padding)
mole.add(...fontStyle)

mole.build()

// mole.build()
