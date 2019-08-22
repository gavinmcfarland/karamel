import njk from 'nunjucks'
import v from 'voca'
import * as Sqrl from 'squirrelly'

const nunjucks = new njk.Environment()
// const nunjucks = njk.configure()

nunjucks.addGlobal('this', function() {
	return this.getVariables()
})

nunjucks.addFilter('kebabcase', function(str) {
	return v.kebabCase(str);
});

Sqrl.defineFilter("kebabcase", function(str) {
	return v.kebabCase(str);
})

Sqrl.defineHelper('iterate', function(args, content, blocks, options) {
	var startingScope = args[0]
	// console.log(startingScope)
	var returnString = content({ this: startingScope })
	let depth = 0;

	for (var [block, value] of Object.entries(blocks)) {
		// console.log(value)

		if (block == 'down') {
			depth++
		}
		if (block == 'up') {
			depth--
		}

		// console.log('depth', depth)
		// console.log('obj ->', getAdjValues(startingScope, depth))
		let blockScope = getAdjValues(startingScope, depth)
		// console.log('blockscope ->', blockScope)
		for (let value of blockScope) {
			// console.log(blocks[block]({ this: value }).trim())
			let re = /undefined/gmi
			// console.log(blocks[block]({ this: value }))
			if (re.test(blocks[block]({ this: value })) === false) {
				// console.log('what ->', blocks[block]({ this: thing }))
				returnString += blocks[block]({ this: value })
			}
		}

	}
	console.log(returnString)
	return returnString
})

// export default function render(string, data) {
// 	return nunjucks.renderString(string, data);
// }

export default function render(string, data) {
	return Sqrl.Render(string, data);
}
