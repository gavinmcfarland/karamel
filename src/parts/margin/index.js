export default ['template', 'margin', theme => {
	let name = 'margin'
	let abbr = 'm'

	return `\
.${abbr} {
	${name}: var(--${name}, unset);
}
.${abbr} > * {
	--${name}: unset;
}`
}]
