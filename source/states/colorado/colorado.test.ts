// Spec, as of 2019-05-02:
// - Format: `ABC-D12`
// - Range: AEW-T01 to BFM-Y21

import colorado from './colorado';
import {
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';
import {bb26Range} from 'bb26';

const getLetters = (serial: string) => serial.slice(0, 3) + serial[4];

describe('Colorado', () => {
	testSerialFormat(colorado(), /^[A-Z]{3}-[A-Z]\d{2}$/);

	testSerial('Should contain valid letters', colorado(), (serial) => {
		const letters = getLetters(serial);
		const validLetters = bb26Range('AEWT', 'BFMZ');

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', colorado(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(2);

		switch (getLetters(serial)) {
			case 'AEWT':
				expect(Number(digits)).toBeGreaterThanOrEqual(1);
				expect(Number(digits)).toBeLessThanOrEqual(99);
				break;
			case 'BFMY':
				expect(Number(digits)).toBeGreaterThanOrEqual(0);
				expect(Number(digits)).toBeLessThanOrEqual(21);
				break;
			default:
				expect(Number(digits)).toBeGreaterThanOrEqual(0);
				expect(Number(digits)).toBeLessThanOrEqual(99);
		}
	});
});
