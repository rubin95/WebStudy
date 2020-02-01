var http = require('http');
var fs = require('fs');

var server = http.createServer();
var port = 3001;

server.listen(port, function () {
    console.log('start web server' + port);
});

server.on('request', function (req, res) {
    console.log("클라이언트 요청");

    var fileName = 'test.png';
    var infile = fs.createReadStream(fileName, {flags: 'r'});

    var fileLength = 0;
    var curLength = 0;

    fs.stat(fileName, function (err, stats) {
        fileLength = stats.size;
    });

    res.writeHead(200, {"Content-Type": "image/png"});

    infile.on('readable', function () {
        var chunk;
        while (null != (chunk = infile.read())) {
            console.log("읽어들인 데이터 크기 : %d 바이트", chunk.length);
            curLength += chunk.length;
            res.write(chunk, 'utf8', function () {
                console.log('파일 부분 쓰기 완료: %d, 파일 크기: %d', curLength, fileLength);
                if (curLength >= fileLength) {
                    res.end();
                }
            });
        }
    });
});