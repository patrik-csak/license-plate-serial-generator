// Spec:
// - Format: `1ABC 23`
// - Range: `1AAA 10` to `9ZZZ 99`
// - Letters `I`, `O`, `Q`, and `U` not used

import massachusetts from './massachusetts';
import {
	getBeginningDigits,
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Massachusetts', () => {
	testSerialFormat(massachusetts(), /^\d[A-HJ-NPRSTV-Z]{3} \d{2}$/);

	testSerial('Should start with 1', massachusetts(), (serial) => {
		const digit = getBeginningDigits(serial);

		expect(digit.length).toBe(1);
		expect(Number(digit)).toBe(1);
	});

	testSerial('Should contain valid letters', massachusetts(), (serial) => {
		const letters = getBeginningLetters(serial.slice(1));

		expect(letters.length).toBe(3);
		expect(letters).toMatch(/^[A-HJ-NPRSTV-Z]{3}$/);
	});

	testSerial('Should end with digits', massachusetts(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial.slice(1));

		expect(digits.length).toBe(2);
		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'AAA' ? 10 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(99);
	});
});
