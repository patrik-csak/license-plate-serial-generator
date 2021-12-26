// Spec, as of 2019-04-09:
// - Format: `ABC 123`
// - Range: `GXV 200` to `IBB 999`

import {range as bb26Range} from 'bb26';
import iowa from './iowa';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Iowa', () => {
	testSerialFormat(iowa(), /^[A-Z]{3} \d{3}$/);

	testSerial('Should contain valid letters', iowa(), (serial) => {
		const letters = getBeginningLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range('GXV', 'IBC');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', iowa(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(letters === 'GXV' ? 200 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(999);
	});
});
