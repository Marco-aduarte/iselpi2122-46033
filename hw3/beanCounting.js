'use strict';

function countBs(string){
	let count = 0;
	for (let idx = 0; idx < string.length; idx++){
		const character = string[idx];
		if (character === 'B')
			++count;
	}
	return count;
}

function countChar(string, char){
	let count = 0;
	for (let idx = 0; idx < string.length; idx++){
		const character = string[idx];
		if (character === char)
			++count;
	}
	return count;
}


console.log(countBs('BBC'));              //->2

console.log(countBs('bhasdjBfVBHJB'));    //->3

console.log(countChar('kakkerlak', 'k')); //->4
