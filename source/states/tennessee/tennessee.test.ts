// Spec, as of 2018-09-02:
// - Format: `ABC-123`
// - Range: `BBB-001` to `BVK-999`

import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import tennessee from './tennessee.js';

describe('Tennessee', () => {
	testSerialFormat(tennessee(), /^[A-Z]{3}-\d{3}$/);

	testSerial('Should contain valid letters', tennessee(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('BBB', 'BVL');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', tennessee(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(3);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(999);
	});
});
