import { getPageWrapper, getPageChild } from '@/dom'

describe('dom', () => {
	document.body.innerHTML = `<div>
      <div id="page-wrapper">
        <div data-spon-page></div>
      </div>
    </div>`

	it('has got a page wrapper with an id', () => {
		const pageWrapper = getPageWrapper()

		if (pageWrapper === null) {
			expect(getPageWrapper).toThrow()
		} else {
			expect(pageWrapper).not.toBe(null)
		}
	})

	it('has got a child page with a data-spon-page attribute', () => {
		const pageChild = getPageChild()
		expect(pageChild).not.toBe(null)
	})
})
