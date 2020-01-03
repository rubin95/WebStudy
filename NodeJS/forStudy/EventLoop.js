'use strict' // 자동으로 오류를 잡아 줄 수 있게 해주는 모드를 켜준다

// Stack
const arr = []

for(let i = 0; i < 100; i++) {
    arr.push(i);
}

console.log(arr.pop()); // 99를 리턴

// Queue
console.log(arr.shift()); // 0을 리턴

console.log(arr);