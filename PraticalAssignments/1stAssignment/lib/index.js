'use strict';

module.exports = {
	filterProperties,
	filterPropertiesN
};

/**
 * 
 * @param {Array.<string>} propNames 
 * @param {Object} obj 
 */
function filterProperties(propNames,obj){
	let newObj = {};
	for (const property of propNames) {
		if(obj[property] != undefined){
			newObj[property] = obj[property];
		}
	}
	return newObj;
}

/**
 * 
 * @param {Array.<string>} propNames 
 * @param {Array.<object>} objs 
 */
function filterPropertiesN(propNames, objs){
	return objs.map((value) => filterProperties(propNames, value))
}

/**
 * 
 * @param {Array<number>} a 
 * @param {Function} combiner 
 */
Array.prototype.zip = function(a, combiner){
	let arrayToReturnSize = this.length;
	if(arrayToReturnSize > a.length){
		arrayToReturnSize = a.length;
	}
	let toReturn = Array();
	for (let idx = 0; idx < arrayToReturnSize; idx++) {
		toReturn[idx] = combiner(this[idx], a[idx]);
	}

	return toReturn;
};

