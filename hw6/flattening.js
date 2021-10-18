'use strict';

let arrays = [[1, 2, 3], [4, 5], [6]];
let str = '[';
arrays.reduce((previous, currentValue) => previous.concat(currentValue));
str = str.concat(']');
console.log(str);
