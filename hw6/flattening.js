'use strict';

function flatten(a, b, c, d){
	if(a != undefined){
		str = str.concat(a + ',' + b);
	}
	else {
		str = str.concat(',' + b);
	}
}

/*function flatten(previousValue, currentValue, currentIndex, array){
	if(previousValue == undefined){
		return;
	}
	else {
		str = str.concat(array);
	}
}*/

let arrays = [[1, 2, 3], [4, 5], [6]];
let str = '[';
arrays.reduce(flatten);
str = str.concat(']');
console.log(str);
