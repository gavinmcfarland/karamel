export default ['template', 'max-width', theme => {

	return `\
	{% for rule in rules -%}
	{% if rule.name === 'default' %}
	.color {
	{% else %}
	.color-{{rule.modifier}} {
	{% endif %}
		{%- for decl in this %}
		{{decl.name | kebabcase}}: {{decl.value | join(' ')}};
		{%- endfor %}
	}
	{% endfor %}`
}]
