// Spec:
// - Format: `ABC1234`
// - Range: `PFA0000` to `PLZ9999`

import {range as bb26Range} from 'bb26';

import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import georgia from './georgia.js';

describe('Georgia', () => {
	testSerialFormat(georgia(), /^[A-Z]{3}\d{4}$/);

	testSerial('Should contain valid letters', georgia(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('PFA', 'PMA');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', georgia(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(9999);
	});
});
