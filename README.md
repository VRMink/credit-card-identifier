Credit Card Identifier
=============
Identifies credit and debit cards based on their number (PAN).

Interface
-----
```js
ccId.find('pan');
```

Usage
-----
```js
ccId = require('credit-card-identifier')

console.log(ccId.find('4929255008802878')) //VISA
console.log(ccId.find('4532971714778876')) //VISA

console.log(ccId.find('5170651768364146')) //MasterCard
console.log(ccId.find('5125796296825872')) //MasterCard

console.log(ccId.find('349237692562216')) //AMEX
console.log(ccId.find('375886564589009')) //AMEX

console.log(ccId.find('3011286804723969')) //Diners
console.log(ccId.find('3026210028069895')) //Diners
```
Contributing
------------
All contributions are welcome. 
Please supply tests to prove your changes

LICENSE
-------
Creative Commons Attribution-ShareAlike
