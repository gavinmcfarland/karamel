import njk from 'nunjucks'

const nunjucks = njk.configure()

export default function render(string, data) {
	return nunjucks.renderString(string, data);
}
