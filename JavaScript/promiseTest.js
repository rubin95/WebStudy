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

// console.log('nothing doing');
// p()
//     .then((message) => {
//         console.log('이행중인 상태', message);
//     })
//     .catch((error) => {
//         console.log('rejected', error);
//     })
//     .finally(() => {
//         console.log("end");
//     });


function c(callback) {
    setTimeout(() => {
        callback();
    }, 1000);
}

// c(() => {
//     console.log("1000ms 후 콜백");
// });
// c(() => {
//     c(() => {
//         console.log("1000ms 후 콜백");
//     });
// });
// c(() => {
//     console.log("1000ms 후 콜백");
// });

function pro() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           console.log(1);
           resolve();
       }, 1000);
    });
}
// pro().then(() => {
//     return pro();
// })
//     .then(() => pro())
//     .then(pro());

// Promise.resolve(new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo', 'data');
//     }, 1000);
// })).then((data1, data2) => {
//     console.log(data1, data2);
// })
//
// Promise.resolve('bar').then(data => {
//     console.log(data);
// });

Promise.reject(new Error('reason')).then(error => {

}).catch(error => {
    console.log(error);
});