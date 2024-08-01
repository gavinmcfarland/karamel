export default ['template', 'letter-spacing', theme => {
	let abbr = theme.property.letterSpacing.abbr

	return `\
	.ls-${modifier} {
		letter-spacing: value;
	}`
}]
