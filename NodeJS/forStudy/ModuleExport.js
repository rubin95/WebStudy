'use strict'

function edit() {}
function write() {}


// 두가지 함수를 export함
// module.exports = {
//     edit,
//     write
// }
// 한가지 함수를 export함
module.exports = edit

class update {


}

module.exports = update

module.exports = {
    id: '',
    token: '',
    function: (name) => {
        console.log(`this is a function ${name}`);
    }
}