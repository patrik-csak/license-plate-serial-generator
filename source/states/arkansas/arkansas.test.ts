// Spec, as of 2019-02-03:
// - Format: `123 ABC`
// - Range: `001 KPG` to `999 YFZ`

import {range as bb26Range} from 'bb26';
import arkansas from './arkansas';
import {
	getBeginningDigits,
	getEndingLetters,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Arkansas', () => {
	testSerialFormat(arkansas(), /^\d{3} [A-Z]{3}$/);

	testSerial('Should contain valid letters', arkansas(), (serial) => {
		const letters = getEndingLetters(serial);

		const validLetters = bb26Range('KPG', 'YGA');

		expect(letters.length).toBe(3);
		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', arkansas(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(digits.length).toBe(3);
		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(999);
	});
});
