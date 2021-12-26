// Spec, as of 2019-03-19:
// - Format: `ABC-1234`
// - Range: `FAA-1000` to `JJS-6999`

import {range as bb26Range} from 'bb26';
import newYork from './new-york';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('New York', () => {
	testSerialFormat(newYork(), /^[A-Z]{3}-\d{4}$/);

	testSerial('Should contain valid letters', newYork(), (serial) => {
		const letters = getBeginningLetters(serial);
		const validLetters = bb26Range('FAA', 'JJT');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', newYork(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'FAA' ? 1000 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'JJS' ? 6699 : 9999);
	});
});
