'use strict'

function arrayToList(array){
    let list = new Object();
    list.value = array[0];
    list.rest = new Object();
        
    let idx = 1;
    let aux = list;
    while(idx < array.length){  
        let node = new Object();  
        node.value = array[idx];
        node.rest = new Object();
        aux.rest = node;
        aux = aux.rest;
        ++idx;
    }
    return list;
}

function listToArray(list){
    let idx = 0;
    let array = new Array();
    while(list != undefined){
        console.log(list.value);
        array[idx] = list.value;
        list = list.rest;
        ++idx;
    }
    return array;
}


function prepend(element, list){

}

console.log(JSON.stringify(arrayToList([10, 20])));     // → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));    // [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));            // → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));         // → 20*/
