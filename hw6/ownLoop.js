'use strict';

function loop(value, testFunction, updateFunction, bodyFunction){
	if(!testFunction(value)) return;
	bodyFunction(value);
	loop(updateFunction(value), testFunction, updateFunction, bodyFunction);
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

console.log('\n');

loop(10, n => n > 0, n => n - 1, console.log);
// → 10
// → 9
// → 8
// → 7
// → 6
// → 5
// → 4
// → 3
// → 2
// → 1
