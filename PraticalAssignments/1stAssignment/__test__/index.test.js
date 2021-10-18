'use strict';

const utils = require('./../lib/index');

test('first test', () => {
	const props = ['b', 'd', 'g', 'a'];
	const o = {a: 1, b: 'Thor', c: [1,2,3], d: {x: 10}, e: 2, f: 'Captain America'};

	const oFiltered = utils.filterProperties(props, o);

	expect(oFiltered).toEqual( {a: 1, b: 'Thor', d: {x: 10}});
});


