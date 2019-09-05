import _ from 'lodash'
import fs from 'fs'
import v from 'voca'
import render from '../../render'
import structure from '../../structure'
// let template = fs.readFileSync(__dirname + '/template.sqrl', 'utf8')

export default ['template', 'font-color', (theme) => {
	let abbr = theme.property.fontColor.abbr
	let o = theme.color
	let string = ''
	for (let modifier in o) {
		if (modifier !== 'theme') {
			string += `.${abbr}-${modifier} {\n`
			string += `	color: ${o[modifier]};\n`
			string += `}\n`
		}

	}

	return string
}]
