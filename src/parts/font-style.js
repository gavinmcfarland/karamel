import _ from 'lodash'
import render from '../render'

export default ['template', 'font-style', ({ theme }) => {
	let utilities = theme.font.style
	let name = 'font style'
	let abbr = 'f'

	console.log(_.map(utilities, (value, modifier) => {
		return `${abbr}-${modifier}`
	}))

	console.log(render(`hello {{test}}`, { test: 'Gavin' }))

	return 'test'
}]
