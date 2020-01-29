var fs = require('fs');

var inname = './output.txt';
var outname = './output2.txt';

fs.exists(outname, function (exists) {
    if(exists) {
        // 만약에 같은 이름을 가진 파일이 존재한다면 파일을 삭제하도록 함
        fs.unlink(outname, function (err) {
            if (err) throw err;
            console.log('기존 파일 [' + outname + '] 삭제함');
        });
    }

    var infile = fs.createReadStream(inname, {flags: 'r'});
    var outfile = fs.createWriteStream(outname,{flags: 'w'});

    infile.pipe(outfile);
    console.log('파일 복사 [' + inname + '] -> [' + outname + ']');
});