'use strict'

function reverseArray(array){
    return array.reverse();
}


function reverseArrayInPlace(array){
    array.reverse();
}

console.log(reverseArray(['A', 'B', 'C']));

let arrayValue = [1, 2, 3, 4, 5]
reverseArrayInPlace(arrayValue);

console.log(arrayValue);