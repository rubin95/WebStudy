var http = require('http');
var fs = require('fs');

var server = http.createServer();
var port = 3000;

server.listen(port, function () {
    console.log('start web server' + port);
});

server.on('request', function (req, res) {
    console.log("클라이언트 요청");

    var fileName = 'test.png';
    var infile = fs.createReadStream(fileName, {flags: 'r'});
    infile.pipe(res);
});