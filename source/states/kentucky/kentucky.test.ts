// Spec, as of 2019-05-28:
// - Format: `123 ABC`
// - Range: `901 JCB` to `253 ZJK`

import {range as bb26Range} from 'bb26';
import {
	getBeginningDigits,
	getEndingLetters,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import kentucky from './kentucky.js';

describe('Kentucky', () => {
	testSerialFormat(kentucky(), /^\d{3} [A-Z]{3}$/);

	testSerial('Should contain valid digits', kentucky(), (serial) => {
		const digits = getBeginningDigits(serial);
		const letters = getEndingLetters(serial);

		expect(digits.length).toBe(3);

		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'JCB' ? 901 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'ZJK' ? 253 : 999);
	});

	testSerial('Should contain valid letters', kentucky(), (serial) => {
		const letters = getEndingLetters(serial);

		const validLetters = bb26Range('JCB', 'ZJK');

		expect(validLetters).toContain(letters);
	});
});
