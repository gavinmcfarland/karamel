export default ['template', 'width', ({ theme }) => {
	let name = 'width'
	let abbr = 'w'

	return `\
	.${abbr} {
		${name}: var(--${name});
	}
	.${abbr} > * {
		--${name}: unset;
	}`
}]
