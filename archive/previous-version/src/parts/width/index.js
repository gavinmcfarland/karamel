import { stripIndent } from 'common-tags'

export default ['template', 'width', (theme) => {
	let name = 'width'
	let abbr = theme.property.width.abbr

	let o = theme.size.width

	let string = ''
	for (let i = 0; i < o.length; i++) {
		let modifier = o[i]
		string += `.${abbr}-${i + 1} {\n`
		string += `	${name}: ${modifier}\n`
		string += `}\n`
	}

	string += `\
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

	return string
}]
