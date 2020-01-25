// 기본적인 Person 객체 틀 생성
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 아래와 같이 객체의 함수를 정의하는 이유(Person.walk 가 아니라 Person.prototype.walk 인 이유)
// Person 객체가 실제 데이터를 담기 위한 객체가 아니라 다른 인스턴스 객체를 만들기 위한 틀로서 만들어져있기 때문
// 또한 prototype 속성으로 추가를 한다면 인스턴스 객체를 만들 때 메모리를 효율적으로 관리할 수 있다.
Person.prototype.walk = function (speed) {
    console.log('%d의 속도로 걸어간다', speed);
};

var person1 = new Person('Rubin', 26);
var person2 = new Person('Ezra', 26);

console.log('%s', person1.name);
person1.walk(10);