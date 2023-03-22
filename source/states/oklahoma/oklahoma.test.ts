// Spec, as of 2019-04-14:
// - Format: `ABC-123`
// - Range: `AAA-001` to `JRK-999`

import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import oklahoma from './oklahoma.js';

describe('Oklahoma', () => {
	testSerialFormat(oklahoma(), /^[A-Z]+-\d{3}$/);

	testSerial('Should contain valid letters', oklahoma(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('AAA', 'JRL');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', oklahoma(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(3);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(999);
	});
});
