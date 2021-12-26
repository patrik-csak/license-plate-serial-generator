// Spec, as of 2018-07-22):
// - Format: `ABC-1234`
// - Range: `PAA-1001` to `PLA-9999`

import {range as bb26Range} from 'bb26';
import northCarolina from './north-carolina';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('North Carolina', () => {
	testSerialFormat(northCarolina(), /^[A-Z]{3}-\d{4}$/);

	testSerial('Should contain valid letters', northCarolina(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('PAA', 'PLB');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', northCarolina(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(digits.length).toBe(4);

		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'PAA' ? 1001 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(9999);
	});
});
