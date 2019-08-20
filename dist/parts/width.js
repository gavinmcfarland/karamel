// import render from '../render'
// export default ['template', 'width', ({ theme }) => {
// 	let properties = {
// 		width: [
// 			'<integer:1-20>',
// 			'<unit>',
// 			'content',
// 			'flex',
// 			'viewport'
// 		]
// 	}
// 	// let theme = {
// 	// 	width: {
// 	// 		default: {
// 	// 			width: 'stuff'
// 	// 		},
// 	// 		content: {
// 	// 			display: `inline-flex`
// 	// 		},
// 	// 		shrink: {
// 	// 			display: `inline-flex`
// 	// 		}
// 	// 	}
// 	// }
// 	let name = 'width'
// 	let abbr = 'w'
// 	return render(`\
// 	{% for rule in rules %}
// 	{% if rule.modifiers %}
// 	.{{rule.abbr}} {
// 	{% else %}
// 	{% for modifier in modifiers %}
// 	.{{rule.abbr}}-{{modifier.name}} {
// 	{% endif %}
// 		{% for decl in decls %}
// 		{{part.name}}: var(--{{part.name}};
// 		{% endfor %}
// 	}
// 	.{{rule.abbr}} > * {
// 		--{{part.name}}: unset;
// 	}
// 	{% endfor %}
// 	{% endfor %}
// 	`, {
// 		rules: [{
// 			name: 'width',
// 			abbr: 'w',
// 			decls: [{
// 				name: 'default',
// 				decls: [{
// 					prop: '',
// 					value: ''
// 				}]
// 			}],
// 			modifiers: [{
// 					name: 'content',
// 					decls: [{
// 						prop: '',
// 						value: ''
// 					}]
// 				},
// 				{
// 					name: 'shrink',
// 					decls: [{
// 						prop: 'display',
// 						value: 'inline-flex'
// 					}]
// 				},
// 				{
// 					name: '> *',
// 					decls: [{
// 						prop: '--width',
// 						value: 'unset'
// 					}]
// 				}
// 			]
// 		}]
// 	})
// }]
"use strict";