// Spec, as of 2019-05-29:
// - Format: `1234 AB`
// - Range: `1 GA` to `5252 XK`
// Letter 'O' not used

import {
	getBeginningDigits,
	getEndingLetters,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import maine from './maine.js';

describe('Maine', () => {
	testSerialFormat(maine(), /^\d{1,4} [A-Z]{2}$/);

	testSerial('Should contain valid digits', maine(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(5252);
	});

	testSerial('Should contain two letters', maine(), (serial) => {
		const letters = getEndingLetters(serial);

		expect(letters.length).toBe(2);
	});

	testSerial("Should not contain the letter 'O'", maine(), (serial) => {
		expect(serial).not.toMatch('O');
	});
});
