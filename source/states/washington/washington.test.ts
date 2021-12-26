// Spec, as of 2019-06-03:
// - Format: `ABC1234`
// - Range: `AAA0000` to `BPY9526`

import {range as bb26Range} from 'bb26';
import washington from './washington';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Washington', () => {
	testSerialFormat(washington(), /^[A-Z]{3}\d{4}$/);

	testSerial('Should contain valid letters', washington(), (serial) => {
		const letters = getBeginningLetters(serial);
		const validLetters = bb26Range('AAA', 'BPZ');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', washington(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'BPY' ? 9526 : 9999);
	});
});
