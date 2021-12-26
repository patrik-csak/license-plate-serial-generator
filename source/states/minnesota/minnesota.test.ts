// Spec, as of 2019-05-22:
// - Format: `ABC-123`
// - Range: `AAA-001` to `DBY-020`

import {range as bb26Range} from 'bb26';
import minnesota from './minnesota';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Minnesota', () => {
	testSerialFormat(minnesota(), /^[A-Z]{3}-\d{3}$/);

	testSerial('Should contain valid letters', minnesota(), (serial) => {
		const letters = getBeginningLetters(serial);
		const validLetters = bb26Range('AAA', 'DBZ');

		expect(letters.length).toBe(3);
		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', minnesota(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(digits.length).toBe(3);
		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'DBY' ? 20 : 999);
	});
});
