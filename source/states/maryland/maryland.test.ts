// Spec, as of 2019-05-27:
// - Format: `1AB2345`
// - Range: `8CN0000` to `9DW2552`

import {range as bb26Range} from 'bb26';
import {
	getBeginningDigits,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import maryland from './maryland.js';

const getLetters = (serial: string): string => {
	const matches = /^\d([A-Z]+)/.exec(serial);
	return matches ? matches[1]! : '';
};

describe('Maryland', () => {
	testSerialFormat(maryland(), /\d[A-Z]{2}\d{4}$/);

	testSerial('Should start with a digit', maryland(), (serial) => {
		const digit = getBeginningDigits(serial);

		expect(Number(digit)).toBeGreaterThanOrEqual(8);
		expect(Number(digit)).toBeLessThanOrEqual(9);
	});

	testSerial('Should contain valid letters', maryland(), (serial) => {
		const digit = Number(getBeginningDigits(serial));
		const letters = getLetters(serial);

		expect(letters.length).toBe(2);

		const validLetters = bb26Range(
			digit === 8 ? 'CN' : 'AA',
			digit === 9 ? 'DX' : 'AAA',
		);

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', maryland(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getLetters(serial);

		expect(digits.length).toBe(4);
		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'DW' ? 2552 : 9999);
	});
});
