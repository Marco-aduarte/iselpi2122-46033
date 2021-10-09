'use strict';

function isEven(num) {
	if (num < 0) return 'Not a positive number';
	if (num == 0) {
		return true;
	} 
	else if (num == 1) {
		return false;
	}
	return isEven(num-2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(24));
console.log(isEven(-1));
