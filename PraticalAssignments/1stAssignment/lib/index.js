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
	let array = Array();
	objs.reduce((previousValue, currentValue, currentIndex) => 
		array[currentIndex] = filterProperties(propNames, currentValue),
	{});
	return array;
}


