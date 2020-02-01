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
    fs.readFile(fileName, function (err, data) {
        res.writeHead(200, {"Content-Type": "image/png"});
        res.write(data);
        res.end();
        console.log("callback");
    });
    console.log("test");
});