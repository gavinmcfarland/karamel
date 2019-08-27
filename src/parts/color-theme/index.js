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
			if (v.kebabCase(prop) === 'text') {
				string += `	--color: ${value};\n`
			}
			if (v.kebabCase(prop) === 'heading') {
				string += `	--heading-color: ${value};\n`
			}
			if (v.kebabCase(prop) === 'link') {
				string += `	--link-color: ${value};\n`
			}
			if (v.kebabCase(prop) === 'quote') {
				string += `	--quote-color: ${value};\n`
			}
			if (v.kebabCase(prop) === 'border') {
				string += `	--border-color: ${value};\n`
			}
			if (v.kebabCase(prop) === 'background') {
				string += `	--background-color: ${value};\n`
			}

		}
		string += `}\n`
	}

	string += `\
.${abbr} {
	color: var(--color);
	background-color: var(--background-color);
}`

	return string
}]
