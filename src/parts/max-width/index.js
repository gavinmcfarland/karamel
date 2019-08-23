import { stripIndent } from 'common-tags'

export default ['template', 'max-width', ({ theme }) => {
	let name = 'max-width'
	let abbr = 'max-w'

	return stripIndent `\
	.${abbr} {
		--${name}: value;
		${name}: var(--${name});
	}`
}]
