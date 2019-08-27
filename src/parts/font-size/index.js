export default ['template', 'font-size', ({ theme }) => {
	let name = 'font-size'
	console.log(name)
	let abbr = theme.property.fontSize.abbr

	let o = theme.size.font

	let string = ''
	for (let i = 0; i < o.length; i++) {
		let modifier = o[i]
		string += `.${abbr}-${i} {\n`
		string += `	${name}: ${modifier}\n`
		string += `}\n`
	}
	return string
}]
