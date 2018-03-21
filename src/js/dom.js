/*
  Dom object
*/

export default (
	options = {
		id: 'page-wrapper',
		selector: '[data-spon-page]'
	}
) => {
	const { id, selector } = options

	let $page
	let $html

	return {
		getPageWrapper() {
			$page = document.getElementById(id)

			if (!$page) {
				throw new Error('Page must have an id')
			}

			return $page
		},

		getPageChild() {
			const $child = document.querySelector(selector)
			return $child
		},

		parseResponse(string) {
			const box = document.createElement('div')
			box.innerHTML = string

			const $title = box.querySelector('title')

			return {
				title: $title ? $title.textContent : false,
				html: box.querySelector(selector)
			}
		},

		injectNewHtml() {}
	}
}
