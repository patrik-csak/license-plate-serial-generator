// Spec (as of 2019-05-18):
// - Format: `1ABC123`
// - Range: `6TPW000` to `8KPP139`

import {range as bb26Range} from 'bb26';
import california from './california';
import {testSerial, testSerialFormat} from '../../../tests/helpers';

describe('California', () => {
	testSerialFormat(california(), /^\d[A-Z]{3}\d{3}$/);

	testSerial(
		'First digit should be between 6 and 8',
		california(),
		(serial) => {
			expect(Number(serial[0])).toBeGreaterThanOrEqual(6);
			expect(Number(serial[0])).toBeLessThanOrEqual(8);
		}
	);

	testSerial('Letters should be valid', california(), (serial) => {
		const letters = serial.slice(1, 4);
		let validLetters: string[];

		switch (Number(serial[0])) {
			case 6:
				validLetters = bb26Range('TPW', 'AAAA');
				break;
			case 7:
				validLetters = bb26Range('AAA', 'AAAA');
				break;
			case 8:
				validLetters = bb26Range('AAA', 'KPQ');
				break;
			default:
				throw new Error('Digit should be between 6 and 8');
		}

		expect(validLetters).toContain(letters);
	});

	testSerial('Digits should be valid', california(), (serial) => {
		const digits = serial.slice(4);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(serial === 'KPP' ? 139 : 999);
	});
});
