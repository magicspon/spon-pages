/*
  Dom object
*/

export function getPageWrapper(id = 'page-wrapper') {
	const $page = document.getElementById(id)

	if (!$page) {
		throw new Error('Page must have an id')
	}

	return $page
}

export function getPageChild(selector = '[data-spon-page]') {
	const $child = document.querySelector(selector)

	return $child
}
