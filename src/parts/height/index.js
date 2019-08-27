import { stripIndent } from 'common-tags'

export default ['template', 'height', ({ theme }) => {
	let name = 'height'
	let abbr = theme.property.height.abbr

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
