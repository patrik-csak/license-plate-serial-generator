// Spec, as of 2018-06-05:
// - Format: `ABC1234`
// - Range: `AAA0001` to `CNX1511` (as of 2019-05-28)

import {range as bb26Range} from 'bb26';
import arizona from './arizona';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Arizona', () => {
	testSerialFormat(arizona(), /^[A-Z]{3}\d{4}$/);

	testSerial(
		'First three characters should be letters',
		arizona(),
		(serial) => {
			const letters = getBeginningLetters(serial);

			expect(letters.length).toBe(3);

			const validLetters = bb26Range('AAA', 'CNY');

			expect(validLetters).toContain(letters);
		}
	);

	testSerial('Last four characters should be digits', arizona(), (serial) => {
		const letters = serial.slice(0, 3);
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(4);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'CNX' ? 1511 : 9999);
	});
});
