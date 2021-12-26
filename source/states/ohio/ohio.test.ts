// Spec, as of 2019-05-13:
// - Format: `ABC 1234`
// - Range: `FWA 1000` to `HUF 1415`

import ohio from './ohio';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';
import {bb26Range} from 'bb26';

describe('Ohio', () => {
	testSerialFormat(ohio(), /^[A-Z]{3} \d{4}$/);

	testSerial('Should contain valid letters', ohio(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('FWA', 'HUG');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', ohio(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(digits.length).toBe(4);

		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'FWA' ? 1000 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'HUF' ? 1415 : 9999);
	});
});
