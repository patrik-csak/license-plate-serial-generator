import random from './random';
import {interpunct} from '../../lib';

test('random', () => {
	for (let i = 0; i < 1_000; i++) {
		const expected = new RegExp(`^[A-Z-\\d${interpunct} ]{1,8}$`);

		expect(random()).toMatch(expected);
	}
});
