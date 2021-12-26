// Spec, as of 2019-05-20:
// - Format: `123 ABC`
// - Range: `001 BAA` to `006 LPV`

import {range as bb26Range} from 'bb26';
import oregon from './oregon';
import {
	getBeginningDigits,
	getEndingLetters,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Oregon', () => {
	testSerialFormat(oregon(), /^\d{3} [A-Z]{3}$/);

	testSerial('Should contain valid digits', oregon(), (serial) => {
		const digits = getBeginningDigits(serial);
		const letters = getEndingLetters(serial);

		expect(digits.length).toBe(3);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'LPV' ? 6 : 999);
	});

	testSerial('Should contain valid letters', oregon(), (serial) => {
		const letters = getEndingLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('BAA', 'LPW');

		expect(validLetters).toContain(letters);
	});
});
