'use strict';

const utils = require('./../lib/index');

test('FilterProperties Test', () => {
	const props = ['b', 'd', 'g', 'a'];
	const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'};

	const oFiltered = utils.filterProperties(props, o);

	expect(oFiltered).toEqual({a: 1, b: 'Thor', d: {x: 10}});
});

test('FilterPropertiesN Test', () => {
	
	const objs = [
		{a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'},
		{b: 'Hulk', a: [1,2,3], d: {x: 10}, e: 2, g: false}, 
		{x: 'Vision', y: false}
	];

	const props = ['b', 'd', 'g', 'a'];
	const objsFiltered = utils.filterPropertiesN(props, objs);

	expect(objsFiltered).toEqual( [
		{a: 1, b: 'Thor', d: {x: 10}},
		{b: 'Hulk', a: [1,2,3], d: {x: 10}, g: false}, 
		{ }]);
});

