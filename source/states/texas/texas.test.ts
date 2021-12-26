// Spec, as of 2019-05-27:
// - Format: `ABC-1234`
// - Range: `BBB-0001` to `MCZ-9999`

import texas from './texas';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';
import {bb26Range} from 'bb26';

describe('Texas', () => {
	testSerialFormat(texas(), /^[A-Z]{3}-\d{4}$/);

	testSerial('Should contain valid letters', texas(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('BBB', 'MDA');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', texas(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(4);
		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(9999);
	});
});
