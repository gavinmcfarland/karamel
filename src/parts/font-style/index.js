import _ from 'lodash'
import fs from 'fs'
import render from '../../render'
import structure from '../../structure'

export default ['template', 'font-style', ({ theme }) => {

	let data = {
		rules: [{
			name: 'font-style',
			abbr: 'f',
			...structure(theme.font.style, ['modifiers', 'props', 'value'])
		}]
	}

	let template = fs.readFileSync(__dirname + '/template.njk', 'utf8')

	return render(template, data)
}]
