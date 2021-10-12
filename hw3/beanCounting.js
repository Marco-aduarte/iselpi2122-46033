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


function countChars(string, char){
	if(string.length == 0) return 0;
	let count = 0;
	if(string[0] == char) ++count;
	return count + countChars(string.substring(1), char);
}

console.log(countChars('kakkerlak', 'k')); //->4

console.log(countChars('bfsfbswbq', 'b')); //->3

console.log(countChars('bkcndufhuia', 'u')); //->2


/*console.log(countBs('BBC'));              //->2

console.log(countBs('bhasdjBfVBHJB'));    //->3

console.log(countChars('kakkerlak', 'k')); //->4*/