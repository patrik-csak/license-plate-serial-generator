// Spec, as of 2019-05-29:
// - Format: `ABC 1234`
// - Range: `DAA 0000` to `ECR 9999`

import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import michigan from './michigan.js';

describe('Michigan', () => {
	testSerialFormat(michigan(), /^[A-Z]+ \d{4}$/);

	testSerial('Should contain valid letters', michigan(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('DAA', 'ECS');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', michigan(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(4);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(9999);
	});
});
