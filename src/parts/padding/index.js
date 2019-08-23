export default ['template', 'padding', ({ theme }) => {
	let name = 'padding'
	let abbr = theme.properties.padding.abbr

	return `\
.${abbr} {
	${name}-top: var(--pt, unset);
	${name}-right: var(--pr, unset);
	${name}-bottom: var(--pb, unset);
	${name}-left: var(--pl, unset);
}
.${abbr} > * {
	--pt: unset;
	--pr: unset;
	--pb: unset;
	--pl: unset;
}`
}]
