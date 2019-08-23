export default ['template', 'width', ({ theme }) => {
	let modifiers = [
		'<integer:1-20>',
		'<unit>',
		'content',
		'flex',
		'viewport'
	]

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
