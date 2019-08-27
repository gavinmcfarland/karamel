export default ['template', 'margin', ({ theme }) => {
	let name = 'margin'
	let abbr = theme.property.margin.abbr

	let o = theme.scale.spacing
	let string = ''
	for (let i = 0; i < o.length; i++) {
		let modifier = o[i]
		string += `.${abbr}-${i} {\n`
		string += `	${name}: ${modifier}\n`
		string += `}\n`
	}

	for (let side in theme.property.margin) {
		if (side !== 'abbr') {
			let sideabbr = theme.property.margin[side].abbr

			for (let i = 0; i < o.length; i++) {
				let modifier = o[i]
				string += `.${abbr}${sideabbr}-${i} {\n`
				string += `	${name}-${side}: ${modifier}\n`
				string += `}\n`
			}
		}
	}

	string += `\
.${abbr} {
	${name}-top: var(--mt, unset);
	${name}-right: var(--mr, unset);
	${name}-bottom: var(--mb, unset);
	${name}-left: var(--ml, unset);
}
.${abbr} > * {
	--mt: unset;
	--mr: unset;
	--mb: unset;
	--ml: unset;
}`

	return string

}]
