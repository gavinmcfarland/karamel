import { stripIndent } from 'common-tags'

export default ['template', 'max-width', (theme) => {
	let name = 'max-width'
	let abbr = theme.property.maxWidth.abbr

	let o = theme.size.width

	let string = ''
	for (let i = 0; i < o.length; i++) {
		let modifier = o[i]
		string += `.${abbr}-${i + 1} {\n`
		string += `	${name}: ${modifier}\n`
		string += `}\n`
	}

	return string
}]
