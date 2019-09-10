```js
[
    [
        'border',
        [
            'border-style',
            'dotted'
        ]
    ],
    [
        '',
        [
            'color',
            'green'
        ]
    ]
]
```


```js
`{% for prop, decls in props %}
.{{prop}} {
	{% for decl, value in decls %}
	{{decl}}: {{value}};
	{% endfor %}
}
{% endfor %}`
```



