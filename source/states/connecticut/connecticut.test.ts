// Spec (as of 2019-05-18):
// - Format: `AB-12345`, with interpunct for dash
// - Range: `AA-00001` to `AV-00042`

import {range as bb26Range} from 'bb26';
import connecticut from './connecticut';
import interpunct from '../../lib/interpunct';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial
} from '../../../tests/helpers';

describe('Connecticut', () => {
	testSerial('Should be the correct format', connecticut(), (serial) => {
		expect(serial).toMatch(new RegExp(`^[A-Z]{2}${interpunct}\\d{5}$`));
	});

	testSerial('Should contain valid letters', connecticut(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(2);

		const validLetters = bb26Range('AA', 'AW');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', connecticut(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = serial.slice(0, 2);

		expect(digits.length).toBe(5);
		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(letters === 'AV' ? 42 : 99999);
	});
});
