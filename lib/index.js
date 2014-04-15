//Regular expressions are from http://activemerchant.rubyforge.org/classes/ActiveMerchant/Billing/CreditCardMethods.html
var identifiers = [
	{name:'VISA', pattern:/^4\d{12}(\d{3})?$/},
	{name:'MasterCard', pattern:/^(5[1-5]\d{4}|677189)\d{10}$/},
	{name:'Discover', pattern:/^(6011|65\d{2})\d{12}$/},
	{name:'Amex', pattern:/^3[47]\d{13}$/},
	{name:'Diners', pattern:/^3(0[0-5]|[68]\d)\d{11}$/},
	{name:'JCB', pattern:/^35(28|29|[3-8]\d)\d{12}$/},
	{name:'Switch', pattern:/^6759\d{12}(\d{2,3})?$/},
	{name:'Solo', pattern:/^6767\d{12}(\d{2,3})?$/},
	{name:'Dankort', pattern:/^5019\d{12}$/},
	{name:'Maestro', pattern:/^(5[06-8]|6\d)\d{10,17}$/},
	{name:'Forbrugsforeningen', pattern:/^600722\d{10}$/},
	{name:'Laser', pattern:/^(6304|6706|6771|6709)\d{8}(\d{4}|\d{6,7})?$/},
	{name:'Unknown', pattern:/.*/}
]

module.exports = function(pan){
	for(var i = 0; i < identifiers.length; i++){
		var scheme = identifiers[i];
		if(scheme.pattern.test(pan))
			return scheme.name;
	}
};
