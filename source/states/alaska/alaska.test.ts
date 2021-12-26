// Spec, as of 2010-01-01:
// - Format: `ABC 123`
// - Ranges:
//   - `FUZ 100` to `FUZ 999`, or
//   - `GAA 100` to `GZZ 999`, or
//   - `KAA 100` to `KDY 999` (as of 2019-04-10)

import {range as bb26Range} from 'bb26';
import alaska from './alaska';
import {testSerial, testSerialFormat} from '../../../tests/helpers';

describe('Alaska', () => {
	testSerialFormat(alaska(), /^[A-Z]{3} \d{3}$/);

	testSerial('Should contain valid letters', alaska(), (serial) => {
		const letters = serial.slice(0, 3);
		const [firstLetter] = letters;

		expect(['F', 'G', 'K']).toContain(firstLetter);

		let validLetters: string[];

		switch (firstLetter) {
			case 'F':
				validLetters = ['FUZ'];
				break;
			case 'G':
				validLetters = bb26Range('GAA', 'HAA');
				break;
			case 'K':
				validLetters = bb26Range('KAA', 'KDZ');
				break;
			default:
				throw new Error(`Unexpected letter sequence: '${letters}'`);
		}

		expect(validLetters).toContain(letters);
	});

	testSerial('Should contain valid digits', alaska(), (serial) => {
		const letters = serial.slice(0, 3);
		const digits = serial.slice(4);

		expect(digits.length).toBe(3);

		switch (letters[0]) {
			case 'F':
				expect(Number(digits)).toBeGreaterThanOrEqual(
					letters === 'FUZ' ? 100 : 1
				);
				expect(Number(digits)).toBeLessThanOrEqual(999);
				break;
			case 'G':
				expect(Number(digits)).toBeGreaterThanOrEqual(
					letters === 'GAA' ? 100 : 1
				);
				expect(Number(digits)).toBeLessThanOrEqual(999);
				break;
			case 'K':
				expect(Number(digits)).toBeGreaterThanOrEqual(
					letters === 'KAA' ? 100 : 1
				);
				expect(Number(digits)).toBeLessThanOrEqual(
					letters === 'KDY' ? 641 : 999
				);
				break;
			default:
				throw new Error(`Unexpected letter sequence: '${letters}'`);
		}
	});
});
