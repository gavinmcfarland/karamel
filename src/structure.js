import _ from 'lodash'

function createObject(key, children, i, ...args) {
	let obj = {
		name: key,
		...children
	}

	return obj
}

export default function structure(data, ...args) {
	function newObject(data, i = 0, ...args) {

		let result = {}

		let parent = ''

		if (args[0]) {
			parent = args[0][i]
			result[parent] = []
			// if (result.values) {
			// 	console.log(result.values)
			// }
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
			if (parent === 'value') {
				result[parent] = data
			} else {
				result[parent].push(createObject(data, null, i, ...args))
			}
		}

		return result
	}

	return newObject(data, 0, ...args)
}
