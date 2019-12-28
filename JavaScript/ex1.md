# var, let, const 차이점은?
- `var`는 `function-scoped`이고, `let`, `const`는 `block-scoped`입니다.

- `function-scoped`와 `block-scoped`가 무슨말이냐?

## var(function-scoped)
[jsfiddle 참고주소](https://jsfiddle.net/LeoHeo/u9j4u5vh/1/)

```javascript

// var는 function-scope이기 때문에 for문이 끝난다음에 i를 호출하면 값이 출력이 잘 된다.
// 이건 var가 hoisting이 되었기 때문이다.
for(var j=0; j<10; j++) {
  console.log('j', j)
}
console.log('after loop j is ', j) // after loop j is 10


// 아래의 경우에는 에러가 발생한다.
function counter () {
  for(var i=0; i<10; i++) {
    console.log('i', i)
  }
}
counter()
console.log('after loop i is', i) // ReferenceError: i is not defined
```

그럼 항상 function을 만들어서 호출해야 할까? 그건 아니다.

javascript에서는 `immediately-invoked function expression (or IIFE, pronounced "iffy")`라는것이 있다.

`IIFE`로 `function-scope`인거 처럼 만들 수가 있다.

```javascript
// IIFE를 사용하면
// i is not defined가 뜬다.
(function() {
  // var 변수는 여기까지 hoisting이 된다.
  for(var i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // ReferenceError: i is not defined
```

근데 javascript는 여기서 좀 웃긴 부분이 있다.

위에서 잠깐 말했지만 `IIFE`는 `function-scope`처럼 보이게 만들어주지만 `결과가 같지는 않다.`

```javascript
// 이 코드를 실행하면 에러없이 after loop i is 10이 호출된다.
(function() {
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // after loop i is 10
```

위에 코드가 아무 에러 없이 실행되는 이유는 `i`가 hoisting이 되어서 `global variable`이 되었기 때문이다.

그래서 아래와 같이 된 것이다.

```javascript
var i
(function() {
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // after loop i is 10
```

`IIFE`는 쓰는데 이렇게 hoisting이 된다면 무슨 소용이 있겠는가?!

그래서 이런 `hoisting`을 막기 위해 `use strict`를 사용한다.

```javascript
// 아까랑 다르게 실행하면 i is not defined라는 에러가 발생한다.
(function() {
  'use strict'
  for(i=0; i<10; i++) {
    console.log('i', i)
  }
})()
console.log('after loop i is', i) // ReferenceError: i is not defined
```