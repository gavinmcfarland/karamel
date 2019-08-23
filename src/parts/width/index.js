import { stripIndent } from 'common-tags'

export default ['template', 'width', ({ theme }) => {
	let modifiers = [
		'<integer:1-20>',
		'<unit>',
		'content',
		'flex',
		'viewport'
	]

	let name = 'width'
	let abbr = 'w'

	return stripIndent `\
		.${abbr} {
			${name}: var(--${name});
		}
		.${abbr} > * {
			--${name}: unset;
		}
		.${abbr}-viewport {
			max-width: none !important;
			width: 100vw;
			position: relative;
			left: 50%;
			transform: translate(-50vw);
		}
		.${abbr}-viewport.max-w {
			display: flex;
			flex-wrap: wrap;
			justify-content: center;
		}
		.${abbr}-viewport.max-w > .wrapper {
			max-width: var(--max-width);
			box-sizing: content-box;
			width: 100vw;
			flex-shrink: 0;
			flex-basis: 100%;
		}`
}]
