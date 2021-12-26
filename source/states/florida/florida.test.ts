// Spec (as of 2019-04-24):
// - Format: `Z12 3BC`
// - Range: `Z00 0AA` to `Z89 0FW`

import florida from './florida';
import {
	getEndingLetters,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';
import {bb26Range} from 'bb26';

const getDigits = (serial: string) => serial.slice(1, 3) + serial[4];

describe('Florida', () => {
	testSerialFormat(florida(), /^Z\d{2} \d[A-Z]{2}$/);

	testSerial('Should contain valid digits', florida(), (serial) => {
		const digits = getDigits(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(890);
	});

	testSerial('Should contain valid letters', florida(), (serial) => {
		const digits = getDigits(serial);
		const letters = getEndingLetters(serial);

		expect(letters.length).toBe(2);

		const validLetters = bb26Range('AA', digits === '890' ? 'FY' : 'AAA');

		expect(validLetters).toContain(letters);
	});
});
