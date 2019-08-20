import _ from 'lodash'
import fs from 'fs'
import render from '../../render'
import structure from '../../structure'

export default ['template', 'font-style', ({ theme }) => {

	let data = {
		rules: [{
			name: 'font-style',
			abbr: 'font',
			...structure(theme.font.style, ['modifiers', 'props', 'value'])
		}]
	}

	console.log(data.rules[0])

	let template = fs.readFileSync(__dirname + '/template.njk', 'utf8')

	return render(template, data)
}]
