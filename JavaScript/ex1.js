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
// console.log(b);

// 함수 만들어보기
// function hello1() {
//     console.log("hello1");
// }
// console.log(hello1, typeof hello1);

const hello1 = function () {
    console.log('hello1');
}
console.log(hello1, typeof hello1);

// function hello2(name) {
//     console.log('hello2', name);
// }
const hello2 = function (name) {
    console.log('hello2', name);
}
hello2('jo');

// function hello3(name) {
//     return `hello3 ${name}`;
// }
const hello3 = function(name) {
    return `hello3 ${name}`;
}
console.log(hello3('jo'));