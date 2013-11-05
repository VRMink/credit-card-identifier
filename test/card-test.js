var should = require('should');
var ccId = require('../lib');

describe("Credit Card Identifier can identify", function(){
	it("Visa", function(){
		ccId.find('4929255008802878').should.eql('VISA')
		ccId.find('4532971714778876').should.eql('VISA')
	})

	it("MasterCard", function(){
		ccId.find('5170651768364146').should.eql('MasterCard')
		ccId.find('5125796296825872').should.eql('MasterCard')
	})

	it("Amex", function(){
		ccId.find('349237692562216').should.eql('AMEX')
		ccId.find('375886564589009').should.eql('AMEX')
	})

	it("Diners", function(){
		ccId.find('3011286804723969').should.eql('Diners')
		ccId.find('3026210028069895').should.eql('Diners')
	})

})




