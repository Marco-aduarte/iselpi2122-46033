'use strict';

module.exports = {
	filterProperties
};

/**
 * 
 * @param {Array.<string>} propNames 
 * @param {Object} obj 
 */
function filterProperties(propNames,obj){
	let newObj = {};

	for (const property of propNames) {
		newObj[property] = obj[property];
	}
	return newObj;
}

