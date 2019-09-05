import { stripIndent } from 'common-tags'

export default ['template', 'z-index', (theme) => {
	let name = 'z-index'
	let abbr = theme.property.zIndex.abbr

	let string = ''

	for (let i = 0; i <= 50; i += 10) {
		string += `.${abbr}-${i} {\n`
		string += `	${name}: ${i}\n`
		string += `}\n`
	}

	return string
}]
