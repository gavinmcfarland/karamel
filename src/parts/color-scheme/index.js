import v from 'voca'

export default ['template', 'color-theme', ({ theme }) => {
	let abbr = theme.property.colorTheme.abbr
	let o = theme.color.theme
	let string = ''
	for (let modifier in o) {
		if (modifier === 'default') {
			string += `.${abbr} {\n`
		} else {
			string += `.${abbr}-${modifier} {\n`
		}
		for (let [prop, value] of Object.entries(o[modifier])) {
			string += `	${v.kebabCase(prop)}: ${value};\n`
		}
		string += `}\n`
	}

	return string
}]
