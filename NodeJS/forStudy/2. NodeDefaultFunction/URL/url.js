var url = require('url');

var curURL = url.parse('https://m.search.naver.com/search.naver?query=steve+jobs&where=m&sm=mtp_hty');

var curStr = url.format(curURL);

console.log(curStr);
console.dir(curURL);

var queryString = require('querystring');
var param = queryString.parse(curURL.query);

console.log(param.query);
console.log(param.sm);
console.log(queryString.stringify(param));