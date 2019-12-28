/*
const p = new Promise((resolve, reject) => {
    //  Pending
    console.log('now loading');
    setTimeout(() => {

        resolve();
    }, 1000);
});

//콜백 작성 구간
p.then(() => {
    console.log('hello');
});

*/
//
// function p() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve(); // fulfilled
//             reject(); // rejected
//         }, 1000);
//     });
// }
//
// console.log('nothing doing');
// p()
//     .then(() => {
//     console.log('이행중인 상태');
// })
//     .catch(() => {
//     console.log('rejected');
// });
//


function p() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve('hello'); // fulfilled
            // reject('error'); // rejected
            reject(new Error('bad')); // error 객체 넘기기
        }, 1000);
    });
}

console.log('nothing doing');
p()
    .then((message) => {
        console.log('이행중인 상태', message);
    })
    .catch((error) => {
        console.log('rejected', error);
    });

