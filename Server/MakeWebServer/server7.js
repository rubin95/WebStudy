var http = require('http');

var options = {
    host: 'www.google.com',
    port: 80,
    path: '/robots.txt'
};

var req = http.get(options, function (res) {
    var resData = '';
    res.on('data', function (chunk) {
        resData += chunk;
        console.log(resData);
        console.log('get data \n');
    });

    res.on('end', function () {
        console.log(resData);
    });
});

req.on('error', function (err) {
    console.log("오류 : " + err.message);
});