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

// export default function render(string, data) {
// 	return nunjucks.renderString(string, data);
// }

export default function render(string, data) {
	return Sqrl.Render(string, data);
}
