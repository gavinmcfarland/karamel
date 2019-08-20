import njk from 'nunjucks'
import v from 'voca'

const nunjucks = new njk.Environment()
// const nunjucks = njk.configure()

// nunjucks.addGlobal('this', function() {
// 	console.log(this)
// 	return this.getVariables()
// }())

nunjucks.addFilter('kebabcase', function(str) {
	return v.kebabCase(str);
});

export default function render(string, data) {
	return nunjucks.renderString(string, data);
}
