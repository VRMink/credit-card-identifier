
'use strict';

// Example test cards: http://support.worldpay.com/support/kb/bg/testandgolive/tgl5103.html

var should = require('should');
var identifyCard = require('../lib');

describe("Credit Card Identifier can identify", function() {
	it("Visa", function(){
		identifyCard('4929255008802878').should.eql('VISA')
		identifyCard('4532971714778876').should.eql('VISA')
	});

	it("MasterCard", function(){
		identifyCard('5170651768364146').should.eql('MasterCard')
		identifyCard('5125796296825872').should.eql('MasterCard')
	});

	it("Amex", function(){
		identifyCard('349237692562216').should.eql('Amex')
		identifyCard('375886564589009').should.eql('Amex')
	});

  it('Discover', function() {
    identifyCard('6011111111111117').should.eql('Discover');
    identifyCard('6221261111113245').should.eql('Discover');
  });
});

