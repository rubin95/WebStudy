var Person = {};

Person['age'] = 26;
Person['name'] = 'Rubin';
Person.mobile = '010-1234-5678';

console.log(Person.name);
console.log(Person.age);
console.log(Person['mobile']);
console.log(Person.mobile);


// 함수 응용
Person.add = function (a, b) {
    return a + b;
};

console.log(Person.add(3, 5));