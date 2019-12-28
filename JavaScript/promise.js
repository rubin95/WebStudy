/*
ES6부터 자바스크립트의 기본 객체로 추가
 */

console.log(Promise);

/*
생성자를 통해서 프로미스 객체를 만들 수 있다
생성자의 인자로 excutor라는 함수를 이용한다.
 */


// ex) -> new Promise(/* excutor */);

/*
excutor함수는 resolve와 reject를 인자로 가진다.
(resolve, reject) => {...}
resolve와 reject는 함수이다.
resolve(), reject()
 */

// new Promise((resolve, reject) => {});

/*
생성자를 통해서 프로미스 객체를 만드는 순간 Pending(대기)상태로 들어간다.
 */
new Promise((resolve, reject) => {}); // pending
// 위 주석줄 22번과 동일

/*
excutor 함수 인자중 하나인 resolve함수를 실행하면, fulfilled(이행)상태가 된다.
 */
new Promise((resolve, reject) => {
    //
    // ...
    resolve();
});

/*
excutor 함수 인자중 하나인 reject함수를 실행하면, rejected(거부)상태가 된다.
 */

new Promise((resolve, reject) => {
    //
    // ...
    reject();
});