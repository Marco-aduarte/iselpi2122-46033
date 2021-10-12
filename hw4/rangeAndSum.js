'use strict'

function range(start, end, step){
    const array = Array();

    if(step == undefined){
        step = 1;
    }

/*  let a;
    let b;
    if(step < 0){           end <= i
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
        a = end;
        b = start;
    }
    else{
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
        a = start;
        b = end;
    }
*/
    let b;
    if(step > 0){
        b = end;
    }
    else {
        a = end;
    }

    if(a == undefined){
        a = start;
    }
    else {
        b = start;
    }

    let i = start;
    while(i <= end){
        array.push(i);
        i += step;
    }
    array.push(i);

    return array;
}

function sum(array){
    let sum = 0;
    for (let idx = 0; idx < array.length; idx++) {
        sum += array[idx];
    }
    return sum;
}


console.log(range(1, 10));          //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(range(5, 2, -1));       //[5, 4, 3, 2]

console.log(sum(range(1, 10)));     //55

console.log(range(1, 10, 2));       //[1, 3, 5, 7, 9]
