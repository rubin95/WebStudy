'use strict'

const arr = ['test', 'find', 'find1'];

const resFind = arr.find(key => key === 'find');
// 배열 내에서 포함하는 값을 리턴받고 싶다면 find

const resInclude = arr.includes('test');
// 배열 내에 포함되었는지 안되었는지만 구분하기 위해서는 includes

console.log(resFind);
console.log(resInclude);