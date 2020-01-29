// 기본적인 콜백 구조 예제

function add(a, b, callback) {
    var result = a + b;
    callback(result);
}

add(8, 8, function (result) {
    console.log('파라미터로 전달된 콜백 실행');
    console.log(result);
});
console.log('\n');
function add2(a, b, callback) {
    var result = a + b;
    callback(result);

    var history = function (t) {
        console.log(t);
        return a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var add_history1 = add2(9, 7, function (result) {
    console.log('add2: ' + result);
});

console.log(add_history1(123));

console.log('\n');

function add3(a, b, callback) {
    var result = a + b;
    callback(result);

    var count = 0;
    var history = function () {
        count++;
        return count + ' : ' + a + ' + ' + b + ' = ' + result;
    };
    return history;
}

var add_history2 = add3(3, 45, function (result) {
    console.log('test');
    console.log(result);
});

console.log(add_history2());
console.log(add_history2());
console.log(add_history2());

