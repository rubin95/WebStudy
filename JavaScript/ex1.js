var name = 'Mark';
function hello() {}

var person = {name: 'Mark', age: 20};
console.log(person);

// 변수와 상수
// let a = 1; // 변수
// const b = 2; // 상수
// console.log(a);

// a = 2;
// console.log(a);
// b = 3; <- 이렇게 재할당 불가

var a = 0;

(function () {
    a++;
    console.log(a);
})();

console.log(a);

(function () {
    var b = 0;
    console.log(b);
})();
console.log(b);