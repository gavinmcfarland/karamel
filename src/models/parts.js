function createObject(key, children, i, ...args) {
	let obj = {
		value: key,
		...children
	}

	return obj
}

function struct(data, ...args) {
	function newObject(data, i = 0, ...args) {
		// let biggerResult = {}
		// biggerResult.classes = result

		let result = {}

		let parent = ''

		if (args[0]) {
			parent = args[0][i]
			result[parent] = []
		} else {
			parent = 'items'
			result[parent] = []
		}
		// Provide a counter so can tell what iteration
		i++
		if (typeof data === 'object') {
			_.each(data, function(value, key) {
				result[parent].push(
					createObject(key, newObject(value, i, ...args), i, ...args)
				)
			})
		} else {
			result[parent].push(createObject(data, null, i, ...args))
		}

		return result
	}

	return newObject(data, 0, ...args)
}

export default ['model', 'parts', theme => {
	const parts = []

	console.log(theme.color.scheme)
	return
}]
