// Spec (as of 2019-04-06):
// - Format: `ABC 123`
// - Range: `LZD 101` to `RFE 478`

import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import southCarolina from './south-carolina.js';

describe('South Carolina', () => {
	testSerialFormat(southCarolina(), /^[A-Z]+ \d{3}$/);

	testSerial('Should contain valid letters', southCarolina(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('LZD', 'RFF');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', southCarolina(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(digits.length).toBe(3);
		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'LZD' ? 101 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'RFE' ? 478 : 999);
	});
});
