var should = require('should');
var identifyCard = require('../lib');

describe("Credit Card Identifier can identify", function(){
	it("Visa", function(){
		identifyCard('4929255008802878').should.eql('VISA')
		identifyCard('4532971714778876').should.eql('VISA')
	})

	it("MasterCard", function(){
		identifyCard('5170651768364146').should.eql('MasterCard')
		identifyCard('5125796296825872').should.eql('MasterCard')
	})

	it("Amex", function(){
		identifyCard('349237692562216').should.eql('Amex')
		identifyCard('375886564589009').should.eql('Amex')
	})

})




