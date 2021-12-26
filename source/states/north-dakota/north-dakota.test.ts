// Spec, as of 2019-04-15:
// - Format: `123 ABC`
// - Range: `000 BTR` to `825 CNK`

import {range as bb26Range} from 'bb26';
import northDakota from './north-dakota';
import {
	getBeginningDigits,
	getEndingLetters,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

describe('North Dakota', () => {
	testSerialFormat(northDakota(), /^\d{3} [A-Z]{3}$/);

	testSerial('Should contain valid digits', northDakota(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(825);
	});

	testSerial('Should contain valid letters', northDakota(), (serial) => {
		const digits = getBeginningDigits(serial);
		const letters = getEndingLetters(serial);

		const validLetters = bb26Range(
			digits === '000' ? 'BTR' : 'AAA',
			digits === '825' ? 'CNL' : 'AAAA'
		);

		expect(validLetters).toContain(letters);
	});
});
