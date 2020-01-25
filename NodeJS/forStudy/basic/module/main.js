var calc = require('./module1');
console.log('%d', calc.add(2, 5));

var nconf = require('nconf');
nconf.env();
