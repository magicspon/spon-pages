import dom from '@/dom'

const html = `<html>
								<title>Test page</title>
								<body><div><div id="page-wrapper"><div data-spon-page="test"></div></div></div></body>
							</html>`

describe('dom with the correct setup', () => {
	let $

	beforeAll(() => {
		$ = dom({
			id: 'page-wrapper',
			selector: '[data-spon-page]'
		})

		document.body.innerHTML = `<div>
										<div id="page-wrapper">
											<div data-spon-page></div>
										</div>
									</div>`
	})

	afterAll(() => {
		document.body.innerHTML = ''
	})

	it('has got a page wrapper with an id', () => {
		expect($.getPageWrapper()).not.toBe(null)
	})

	it('throws are error when there is no id', () => {
		expect(() => {
			dom({ id: 'xx' }).getPageWrapper()
		}).toThrow()
	})

	it('has got a child page with a data-spon-page attribute', () => {
		expect($.getPageChild()).not.toBe(null)
	})

	it('returns an object with the html response and page title', () => {
		const value = $.parseResponse(html)
		expect(value.title).toBe('Test page')
		expect(value.html.getAttribute('data-spon-page')).toBe('test')
	})
})
