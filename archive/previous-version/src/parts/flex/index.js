import { stripIndent } from 'common-tags'

export default ['template', 'flex', (theme) => {
	let abbr = theme.property.flex.abbr

	return stripIndent `\
	.${abbr}-open {
		display: flex;
		flex-wrap: wrap;
	}
	.${abbr}-open > * {
		flex-basis: 100%;
		flex-shrink: 0;
	}`
}]
