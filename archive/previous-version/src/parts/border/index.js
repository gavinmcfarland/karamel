export default ['template', 'border', theme => {

	let name = 'border'
	let abbr = theme.property.border.abbr

	let string = ''
	let size = theme.size.lines
	let property = theme.property.border

	for (let prop in property) {
		if (prop !== 'abbr') {
			for (let thing in property[prop]) {
				if (thing !== 'abbr') {

					if (thing === 'width') {
						for (let i = 0; i < size.length; i++) {
							string += `.${abbr}${property[prop].abbr}${property[prop][thing].abbr}-${i + 1} {\n`
							string += `	${name}-${prop}-${thing}: ${size[i]};\n`
							string += `}\n`
						}
					} else {
						string += `.${abbr}${property[prop].abbr}${property[prop][thing].abbr} {\n`
						string += `	${name}-${prop}-${thing}: value;\n`
						string += `}\n`
					}

				} else {
					string += `.${abbr}${property[prop].abbr} {\n`
					string += `	${name}-${prop}: value;\n`
					string += `}\n`
				}
			}

		}
	}

	return string

}]
