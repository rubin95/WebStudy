var fs = require('fs');

fs.readFile('../../../package-lock.json', 'utf8', function (err, data) {
    console.log(data);
});

console.log('package-lock 파일읽기 요청');