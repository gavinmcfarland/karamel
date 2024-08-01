import _ from 'lodash'
import fs from 'fs'
import v from 'voca'
import render from '../../render'
import structure from '../../structure'
// let template = fs.readFileSync(__dirname + '/template.sqrl', 'utf8')

export default ['template', 'font-style', (theme) => {
	let abbr = "font-family"
	let o = theme.font.family
	let string = ''
	for (let modifier in o) {
		string += `.${abbr}-${modifier} {\n`
		string += `	font-family: ${o[modifier]};\n`
		string += `}\n`
	}

	return string
}]
