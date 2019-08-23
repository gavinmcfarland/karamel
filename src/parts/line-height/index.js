export default ['template', 'line-height', theme => {
	let abbr = theme.property.lineHeight.abbr

	return `\
	.lh-${modifier} {
		line-height: value;
	}`
}]
