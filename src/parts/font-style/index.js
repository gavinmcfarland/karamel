import _ from 'lodash'
import fs from 'fs'
import render from '../../render'
import structure from '../../structure'
import * as Sqrl from 'squirrelly'
import v from 'voca'

Sqrl.defineFilter("kebabcase", function(str) {
	return v.kebabCase(str);
})

Sqrl.defineHelper("customhelper", function(args, content, blocks, options) {
	var returnStr = ''
	for (var key in blocks) {
		if (typeof blocks[key] === 'function') {
			returnStr += "Block found named " + key + ", with value: " + blocks[key]()
		}
	}
	return returnStr
})

var myTemplate = `\
{{each(options.rules)}}
{{each(@this.modifiers)}}
{{if(@this.name === 'default')}}
.{{@../this.abbr}} {
    {{# else }}
.{{@../this.abbr}}-{{@this.name}} {
{{/if}}
{{each(@this.props)}}
    {{@this.name | kebabcase}}: {{@this.value}};
{{/each}}
}
{{ /each }}
{{ /each }}`

export default ['template', 'font-style', ({ theme }) => {
	let data = {
		rules: [{
			name: 'font-style',
			abbr: 'font',
			...structure(theme.font.style, ['modifiers', 'props', 'value'])
		}]
	}

	let template = fs.readFileSync(__dirname + '/template.njk', 'utf8')

	return Sqrl.Render(myTemplate, data)
}]
