// Spec, as of 2019-04-20:
// - Format: `AB 12345`
// - Range: `AQ 11001` to `BP 20703`

import {range as bb26Range} from 'bb26';

import illinois from './illinois';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Illinois', () => {
	testSerialFormat(illinois(), /^[A-Z]{2} \d{5}$/);

	testSerial('Should contain valid letters', illinois(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(2);

		const validLetters = bb26Range('AQ', 'BQ');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', illinois(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(digits.length).toBe(5);

		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'AQ' ? 11001 : 1);
		expect(Number(digits)).toBeLessThanOrEqual(
			letters === 'BP' ? 20703 : 99999
		);
	});
});
