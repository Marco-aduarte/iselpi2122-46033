'use strict';

const utils = require('./../lib/apiPromisesVersion');

test('readFile() Test', () => {
	const expected = 'RLlDWHh7hR';

    utils.readFile().then(data => expect(expected).toEqual(data.toString()));
	//expect(expected).toEqual(utils.readFile().then(data => data));
});