export default ['template', 'max-width', theme => {

	return `\
	{% for rule in rules -%}
	.{{ rule.name | kebabcase }} {
		{% if rule.default %}
		{% endif %}
	}
	{% endfor %}`
}]
