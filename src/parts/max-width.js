export default ['template', 'max-width', ({ theme }) => {
	let name = 'max-width'
	let abbr = 'max-w'

	return `\
	.${abbr}-${modifier} {
		--${name}: ${value};
		${name}: var(--${name});
	}`
}]
