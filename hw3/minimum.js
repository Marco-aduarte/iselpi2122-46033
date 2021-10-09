'use strict';

const minimum = function (a, b) {
	return a < b ? a : b;
};

console.log(minimum(0, 10));        // -> 0
console.log(minimum(0, -10));       // -> -10
console.log(minimum(10, 2));        // -> 2
console.log(minimum(-5, -10));      // -> -10
console.log(minimum(2, 2));         // -> 2


