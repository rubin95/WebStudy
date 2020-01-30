var http = require('http');

var server1 = http.createServer();

var port = 3000;
server1.listen(port, function () {
    console.log('웹서버가 시작되었습니다. port: %d', port);
});