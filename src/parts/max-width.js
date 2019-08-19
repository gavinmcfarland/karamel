export default ['template', 'max-width', theme => {

	return `\
	max-w-${modifier} {
		--max-width: ${value};
		max-width: 'var(--max-width)';
	}`
}]
