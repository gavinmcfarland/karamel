export default ['template', 'line-height', theme => {
	let abbr = theme.properties.lineHeight.abbr

	return `\
	.lh-${modifier} {
		line-height: value;
	}`
}]
