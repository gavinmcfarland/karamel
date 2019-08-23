local sides = {
	top: { abbr: 't' },
	right: { abbr: 'r' },
	bottom: { abbr: 'b' },
	left: { abbr: 'l' }
};


{
	asset: {
		font: {
			visby: {
				src: ''
			},
			akkurat: {
				src: ''
			},
		}
	},
	number: {
		'minor second'	: 1.067,
		'major second'	: 1.125,
		'minor third'	: 1.2,
		'major third'	: 1.25,
		'perfect forth'	: 1.333,
		'dim fith'		: 1.414,
		'perfect fith'	: 1.5,
		'minor six'		: 1.6,
		'golden ratio'	: 1.168,
		'silver ratio'	: 0,
		'major sixth'	: 1.667,
		'minor seventh'	: 1.778,
		'major seventh'	: 1.875,
		'octave'		: 2,
		'major tenth'	: 2.5,
		'major eleventh': 2.667,
		'major twelfth'	: 3,
		'double octave'	: 4
	},
	scale: {
		font: [
			std.ceil(16 * std.pow($.number['golden ratio'], n))
			for n in std.range(0, 5)
		],
		spacing: [],
		width: []
	},
	color: {},
	font: {
		style: {
			text: {
				'font family': 'arial',
				'line height': '1.4',
				'letter spacing': '0.2em'
			},
			heading: self.text + {
				'font weight': '500'
			},
			link: self.text + {
				'text decoration': 'underline'
			},
			caps: self.heading + {
				'letter spacing': '0.5em',
				'text transform': 'uppercase'
			}
		}
	},
	property: {
		flex: {
			default: {

			},
			open: {
				abbr: 'o'
			},
			shrink: {
				abbr: 's'
			},
			column: {
				abbr: 'c'
			},
			abbr: 'flex'
		},
		fontSize: {
			abbr: 'f'
		},
		fontStyle: {
			abbr: 'font'
		},
		width: {
			content: {},
			flex: {},
			viewport: {},
			abbr: 'c'
		},
		maxWidth: {
			abbr: 'max-w'
		},
		padding: {
			abbr: 'p'
		},
		margin: sides + {
			abbr: 'm'
		},
		border: {
			[key]: sides[key] + {
				width: null,
				style: null,
				color: null,
				radius: null
			} + if key == 'bottom' || key == 'top' then {
				left: sides['left'] + {
					radius: null
				},
				right: sides['right'] + {
					radius: null
				}
			} else {}
			for key in std.objectFields(sides)
		} + {
			collapse: {},
			color: {},
			radius: {},
			image: {
				outset: {},
				repeat: {},
				slice: {},
				source: {},
				width: {},
				spacing: {},
				style: {}
			},
			abbr: 'b'
		}
	}
}
