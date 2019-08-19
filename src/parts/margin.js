export default ['template', 'margin', theme => {
	let name = 'max-width'
	let abbr = 'max-w'

	return `\
	.${abbr}-${modifier} {
		margin: ''
	}`
}]
