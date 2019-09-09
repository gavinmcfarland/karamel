export default ['template', 'border', theme => {

	let name = 'border'
	let abbr = theme.property.border.abbr

	let string = ''
	let colors = theme.color
	let property = theme.property.border

	for (let prop in property) {
		if (prop !== 'abbr') {
			for (let thing in property[prop]) {
				if (prop === 'color') {
					for (let color in colors) {
						// console.log('->', property[prop])
						if (color !== 'theme') {
							string += `.${abbr}-${color} {\n`
							string += `	border-${prop}: ${color};\n`
							string += `}\n`
						}
					}
				}
				if (prop === 'top' || prop == 'right' || prop == 'bottom' || prop == 'left') {
					for (let subprop in property[prop]) {
						if (subprop === 'color') {
							for (let color in colors) {
								if (color !== 'theme') {
									string += `.${abbr}${property[prop].abbr}-${color} {\n`
									string += `	border-${prop}-color: ${colors[color]};\n`
									string += `}\n`
								}

							}
						}
					}

				}
			}

		}
	}

	// console.log(string)

	return string

}]
