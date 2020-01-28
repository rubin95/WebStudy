var fs = require('fs');

fs.writeFileSync('./output2.txt', 'hello world', encoding='utf8');
console.log('writing file');