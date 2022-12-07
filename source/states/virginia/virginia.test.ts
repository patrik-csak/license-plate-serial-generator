// Spec, as of 2019-06-16:
// - Format: `ABC-1234`
// - Range:
//   - `VAA-1000` to `VZZ-9999`
//   - `UZZ-9999` to `UPA-2674` (progressing backwards)

import {range as bb26Range} from 'bb26';
import virginia from './virginia';
import {
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('Virginia', () => {
	testSerialFormat(virginia(), /^[A-Z]{3}-\d{4}$/);

	testSerial('Should contain valid letters', virginia(), (serial) => {
		const letters = getBeginningLetters(serial);
		const validLetters = [
			...bb26Range('VAA', 'WAA'),
			...bb26Range('UPA', 'VAA')
		];

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', virginia(), (serial) => {
		const digits = getEndingDigits(serial);
		const letters = getBeginningLetters(serial);
		let rangeStart = 0;

		if (letters === 'VAA') rangeStart = 1000;
		else if (letters === 'UPA') rangeStart = 2674;

		expect(Number(digits)).toBeGreaterThanOrEqual(rangeStart);
		expect(Number(digits)).toBeLessThanOrEqual(9999);
	});
});
