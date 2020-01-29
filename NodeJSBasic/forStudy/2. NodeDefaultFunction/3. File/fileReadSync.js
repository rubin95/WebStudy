var fs = require('fs');

var data = fs.readFileSync('../../../package-lock.json', 'utf8');
console.log(data);

