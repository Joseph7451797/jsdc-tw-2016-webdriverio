const assert = require('assert');

describe('demo 3, get CK101 index text', function() {

	beforeEach(function() {
		browser.pause(5000);
	});

	it('check headingNews li text', function() {
		browser.url('http://ck101.com/');
        let headingNewsTextsGot = browser.getText('.headingNews > ul li h2').toString()
        let headingNewsTextsShoud = '最新,熱門,精選,卡民討論'
		assert.equal(headingNewsTextsGot, headingNewsTextsShoud);
	});

});
