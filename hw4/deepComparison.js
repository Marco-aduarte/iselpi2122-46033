'use strict'

function deepEqual(a, b){
    if(a === null || b === null){
        return a == b;
    }
    if(typeof a == 'object' || typeof b == 'object'){
        let aKeys = Object.keys(a);
        let bKeys = Object.keys(b);
        let aValues = Object.values(a);
        let bValues = Object.values(b);
        if(aKeys.length != bKeys.length){
            return false;
        }
        for (let idx = 0; idx < aKeys.length; idx++) {
            if(aKeys[idx] === bKeys[idx]){
                if(!deepEqual(aValues[idx], bValues[idx])){
                    return false;
                }
            }
        }
    }
    return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(null, null));                         // → true
console.log(deepEqual(obj, obj));                           // → true
console.log(deepEqual(obj, null));                          // → false
console.log(deepEqual(obj, {here: 1, object: 2}));          // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // → true
