var Calc = require('./calcModule');

var calc = new Calc();

calc.emit('stop', 5);
console.log(Calc.title + '에 stop 이벤트 전달함');