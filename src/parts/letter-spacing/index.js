export default ['template', 'letter-spacing', theme => {
	let abbr = theme.properties.letterSpacing.abbr

	return `\
	.ls-${modifier} {
		letter-spacing: value;
	}`
}]
