export default ['template', 'margin', ({ theme }) => {
	let name = 'margin'
	let abbr = theme.property.margin.abbr

	let o = theme.scale.spacing
	let string = ''
	for (let i = 0; i < o.length; i++) {
		let modifier = o[i]
		string += `.${abbr}-${i} {\n`
		string += `	margin: ${modifier}\n`
		string += `}\n`
	}

	for (let side in theme.property.margin) {
		if (side !== 'abbr') {
			let sideabbr = theme.property.margin[side].abbr

			for (let i = 0; i < o.length; i++) {
				let modifier = o[i]
				string += `.${abbr}${sideabbr}-${i} {\n`
				string += `	margin-${side}: ${modifier}\n`
				string += `}\n`
			}
		}
	}

	string += `\
.${abbr} {
	${name}: var(--${name}, unset);
}
.${abbr} > * {
	--${name}: unset;
}`

	return string

}]
