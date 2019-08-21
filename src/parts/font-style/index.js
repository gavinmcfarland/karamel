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

	let template = `\
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

	return render(template, data)
}]
