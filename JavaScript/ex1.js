var name = 'Mark';
// function hello() {}

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
};
console.log(hello1, typeof hello1);

// function hello2(name) {
//     console.log('hello2', name);
// }
const hello2 = function (name) {
    console.log('hello2', name);
};
hello2('jo');

// function hello3(name) {
//     return `hello3 ${name}`;
// }
const hello3 = function(name) {
    return `hello3 ${name}`;
};
console.log(hello3('jo'));

// 생성자를 이용한 함수 생성방법
// 생성자 파라미터로 처음에 인자를 넣고, 마지막에 실행할 블럭을 입력한다. 이때 모든 인자, 실행할 블럭은 전부 ''로 감싼다
const sum = new Function('a', 'b', 'c', 'return a + b + c');
console.log(sum(1, 2, 3));

// arrow 함수
const hello4 = () => {
    console.log('hello4');
};
hello4();

// 함수를 이용하여 객체 생성
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p = new Person('Jo', 25);
console.log(p, p.name, p.age);

// 함수를 이용하여 함수 호출
function plus(base) {
    return function (num) {
        return base + num;
    }
}
const plus5 = plus(5);
console.log(plus5(10));

// callback 함수
function helloCallBack(c) {
    console.log('hello');
    c();
}
helloCallBack(function() {
    console.log('callback');
});
