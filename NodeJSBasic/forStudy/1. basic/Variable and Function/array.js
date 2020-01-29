var Users = [{name: 'Rubin', age: 26}, {name: 'Ezra', age: 26}];

Users.push({name: 'Bin', age: 26});

console.log(Users.length);

var add = function (a, b) {
    return a + b;
};

// for loop
for (var i = 0; i < Users.length; i++) {
    console.log(i + ' ' + Users[i].name);
}

// forEach
Users.forEach(function (item, index) {
    console.log(index + ' ' + item.name);
});

// 아래 배열 관련 메서드들에서 5. splice가 제대로 이해되지 않아 작성하는 예제 코드
var spliceTest = [{name: 'Rubin', age: 26}, {name: 'Ezra', age: 26}, {name: 'Bin', age: 26}, {name: 'Ryu', age: 26}];
console.log('원본 배열 요소의 수: %d 및 원본 배열', spliceTest.length);
console.dir(spliceTest);

var spliceTest2 = spliceTest.slice(1, 3);
console.dir(spliceTest2);

var spliceTest3 = spliceTest2.slice(1);
console.dir(spliceTest3);


/*
js에서의 배열 메서드들
1. push(object)
    - 스택과 비슷하게 배열의 뒤에 값이 추가된다
2. pop()
    - 스택과 비슷하게 배열의 뒤의 값이 삭제된다
3. unshift(object)
    - 일반 자료구조들과 반대로 배열의 맨 앞에 값이 추가된다
4. shift()
    - 큐와 비슷하게 맨 앞의 값이 삭제된다
5. splice(index, removeCount, [Object])
    - 사실 인자가 2개 들어간다.
    - 인자가 2개일 경우 첫번째 인자는 시작점, 두번째 인자는 최대 범위를 나타내며 마지막 인자의 인덱스 값 - 1까지 슬라이스된다.
    - 만약 인자가 1개일경우 시작점을 나타내며 그 시작점부터 뒤로 쭉 슬라이스 된다.
6. slice(index, copyCount)
    -
예외 메서드
delete
    - delete array[index] 와 같이 사용한다
    - 배열의 해당 index부분이 삭제되고, 그 부분의 공간은 그대로 남아있다.
 */
// Users.push(add);
// console.log(Users[3](4, 5));