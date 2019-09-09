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
	size: {
		font: [
			std.ceil(16 * std.pow($.number['major second'], n)) + 'px'
			for n in std.range(0, 10)
		],
		spacing: [
			std.ceil(2 * std.pow($.number['octave'], n / 2)) + 'px'
			for n in std.range(0, 20)
		],
		width: ['300px', '600px', '1200px'],
		lines: [
			'1px',
			'2px',
			'4px',
			'8px'
		],
	},
	color: {
		primary: 'red',
		secondary: '#FFFFFF',
		tertiary: '#000000',
		theme: {
			default: self.light,
			light: {
				text: '#000000',
				background: '#FFFFFF',
				heading: '#000000',
				link: '#D92020',
				code: 'pink',
				border: '#F0F0F0'
			},
			dark: {
				text: '#F0F0F0',
				background: '#000000',
				heading: '#FFFFFF',
				link: '#D92020',
				code: 'pink',
				border: '#F0F0F0'
			},
			contrast: {
				text: '#000000',
				background: '#F0F0F0',
				heading: '#000000',
				link: '#D92020',
				code: '#4F148F',
				border: '#F0F0F0'
			},
		}
	},
	font: {
		style: {
			text: {
				'font family': 'arial',
				'line height': '1.4'
			},
			heading: self.text + {
				'font weight': '500'
			},
			link: self.text + {
				'text decoration': 'underline'
			},
			caps: self.heading + {
				'letter spacing': '0.23em',
				'text transform': 'uppercase',
				'font weight': '600'
			},
			code: self.text + {
				'font size': '0.9em',
				'font family': 'Menlo'
			},
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
		colorTheme: {
			abbr: 'c'
		},
		fontSize: {
			abbr: 'f'
		},
		fontStyle: {
			abbr: 'f'
		},
		fontColor: {
			abbr: 'f'
		},
		width: {
			content: {},
			flex: {},
			viewport: {},
			abbr: 'w'
		},
		height: {
			abbr: 'h'
		},
		maxWidth: {
			abbr: 'max-w'
		},
		padding: sides + {
			abbr: 'p'
		},
		margin: sides + {
			abbr: 'm'
		},
		border: {
			[key]: sides[key] + {
				width: {
					abbr: 'w'
				},
				style: {
					abbr: 's'
				},
				color: {
					abbr: 'c'
				},
				radius: {
					abbr: 'ra'
				}
			} + if key == 'bottom' || key == 'top' then {
				left: sides['left'] + {
					radius: {
						abbr: 'ra'
					}
				},
				right: sides['right'] + {
					radius: {
						abbr: 'ra'
					}
				}
			} else {}
			for key in std.objectFields(sides)
		} + {
			collapse: {
				abbr: 'c'
			},
			color: {
				abbr: 'c'
			},
			radius: {
				abbr: 'ra'
			},
			width: {
				abbr: 'w'
			},
			image: {
				outset: {
					abbr: 'o'
				},
				repeat: {
					abbr: 'r'
				},
				slice: {
					abbr: 's'
				},
				source: {
					abbr: 's'
				},
				width: {
					abbr: 'w'
				},
				spacing: {
					abbr: 's'
				},
				style: {
					abbr: 's'
				},
				abbr: 'i'
			},
			abbr: 'b'
		},
		zIndex: {
			abbr: 'z'
		},
	}
}
