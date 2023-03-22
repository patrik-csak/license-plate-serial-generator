// Spec, as of 2019-05-31:
// Format: `ABC-1234`
// Range: `KLF-0000 to LBP-1791`

import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import pennsylvania from './pennsylvania.js';

describe('Pennsylvania', () => {
	testSerialFormat(pennsylvania(), /^[A-Z]{3}-\d{4}$/);

	testSerial('Should contain valid letters', pennsylvania(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('KLF', 'LBC');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', pennsylvania(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(digits.length).toBe(4);
		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'LBP' ? 1791 : 9999);
	});
});
