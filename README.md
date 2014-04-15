Credit Card Identifier
=============
Correctly identifies cards from VISA, Amex, Mastercard, Diners, Discover, JCB, Switch, Solo, Dankort, Maestro, Forbrugsforeningen, Laser.

Interface
-----
```js
identifyCard('card number');
```
Given a card number represented as a string, the find method will return the name of the card scheme or 'Unknown'.

Usage
-----
```js
identifyCard = require('credit-card-identifier')

console.log(identifyCard('4929255008802878')) //VISA
console.log(identifyCard('4532971714778876')) //VISA

console.log(identifyCard('5170651768364146')) //MasterCard
console.log(identifyCard('5125796296825872')) //MasterCard

console.log(identifyCard('349237692562216')) //AMEX
console.log(identifyCard('375886564589009')) //AMEX

console.log(identifyCard('3011286804723969')) //Diners
console.log(identifyCard('3026210028069895')) //Diners
```

Contributing
------------
All contributions are welcome. 
Please supply tests to prove your changes

LICENSE
-------
Creative Commons Attribution-ShareAlike
