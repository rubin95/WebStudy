process.on('tick', function (count) {
    console.log('tick event %s', count);
});

setTimeout(function () {
    console.log('2초 후에 tick이벤트 전달 시도');

    process.emit('tick', '2');
}, 2000);


process.on('exit', function () {
    console.log('이벤트 발생');
});

setTimeout(function () {
    console.log('2초 후에 시스템 종료 시도함');

    process.exit();
}, 2000);



