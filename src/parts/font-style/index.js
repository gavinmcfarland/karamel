import _ from 'lodash'
import fs from 'fs'
import v from 'voca'
import render from '../../render'
import structure from '../../structure'
// let template = fs.readFileSync(__dirname + '/template.sqrl', 'utf8')

export default ['template', 'font-style', (theme) => {
	let abbr = theme.property.fontStyle.abbr
	let o = theme.font.style
	let string = ''
	for (let modifier in o) {
		string += `.${abbr}-${modifier} {\n`
		for (let [prop, value] of Object.entries(o[modifier])) {
			string += `	${v.kebabCase(prop)}: ${value};\n`
		}
		string += `}\n`
	}

	return string
}]
