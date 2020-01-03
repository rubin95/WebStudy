'use strict';

const obj = {
    title: 'node.js  Study'
};
console.log(isEmptyObj(obj));


function isEmptyObj(obj) {
    if(obj.title) {
        return true;
    } else {
        return false;
    }
}


// const isEmptyObj = (obj) => obj.title ? true : false
