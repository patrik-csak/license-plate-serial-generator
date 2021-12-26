// Spec, as of 2019-05-21:
// - Format: `123·A45`
// - Range: `001·A00` to `868·J40`

import nevada from './nevada';
import {
	getBeginningDigits,
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';
import {interpunct} from '../../lib';

describe('Nevada', () => {
	testSerialFormat(nevada(), new RegExp(`^\\d{3}${interpunct}[A-Z]\\d{2}$`));

	testSerial('Should start with digits', nevada(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(999);
	});

	testSerial(
		'Should contain a valid letter after the interpunct',
		nevada(),
		(serial) => {
			const letter = getBeginningLetters(serial.slice(4));

			expect(letter.length).toBe(1);
			expect(letter).toMatch(
				serial.startsWith(`868${interpunct}`) ? /[A-J]/ : /[A-Z]/
			);
		}
	);

	testSerial(
		'Should contain valid digits after the letter',
		nevada(),
		(serial) => {
			const digits = getEndingDigits(serial);

			expect(Number(digits)).toBeGreaterThanOrEqual(1);
			expect(Number(digits)).toBeLessThanOrEqual(
				digits === `868${interpunct}J` ? 40 : 99
			);
		}
	);
});
