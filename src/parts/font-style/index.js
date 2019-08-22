import _ from 'lodash'
import fs from 'fs'
import render from '../../render'
import structure from '../../structure'
let template = fs.readFileSync(__dirname + '/template.sqrl', 'utf8')

export default ['template', 'font-style', ({ theme }) => {
	let data = {
		rules: [{
			name: 'font-style',
			abbr: 'font',
			...structure(theme.font.style, ['modifiers', 'props', 'value'])
		}]
	}

	return render(template, data)
}]
