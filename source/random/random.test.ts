import {interpunct} from '../lib/index.js';
import random from './random.js';

test('random', () => {
	for (let i = 0; i < 1000; i++) {
		const expected = new RegExp(`^[A-Z-\\d${interpunct} ]{1,8}$`);

		expect(random()).toMatch(expected);
	}
});
