{
	theme: {
		size: {
			font: [],
			spacing: [],
			width: []
		},
		color: {
			primary: '',
			theme: {
				default: {
					text: '',
					background: '',
					heading: '',
					link: '',
					code: '',
					border: ''
				}
			}
		},
		font: {
			family: {},
			style: {
				text: {
					'font family': 'arial',
					'line height': '1.4',
					'letter spacing': '0.1em'
				},
				heading: self.text + {
					'font weight': '600'
				},
				link: self.text + {
					'text decoration': 'underline'
				},
				caps: self.heading + {
					'letter spacing': '0.5em',
					'text transform': 'uppercase'
				}
			}
		}
	}
}
