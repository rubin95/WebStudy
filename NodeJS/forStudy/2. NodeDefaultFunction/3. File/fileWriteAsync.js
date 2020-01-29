var fs = require('fs');

fs.writeFile('./output.txt', 'hello world', function (err) {
    if (err) {
        console.log('Error' + err);
    }

    console.log('output.txt writed');
});

console.log('writing file');