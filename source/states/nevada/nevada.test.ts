import {
	getBeginningDigits,
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import {interpunct} from '../../lib/index.js';
import nevada from './nevada.js';

describe('Nevada', () => {
	testSerialFormat(nevada(), new RegExp(`^\\d{3}${interpunct}[A-Z]\\d{2}$`));

	testSerial('Should start with digits', nevada(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
		expect(Number(digits)).toBeLessThanOrEqual(191);
	});

	testSerial(
		'Should contain a valid letter after the interpunct',
		nevada(),
		(serial) => {
			const letter = getBeginningLetters(serial.slice(4));

			expect(letter.length).toBe(1);
			expect(letter).toMatch(
				serial.startsWith(`191${interpunct}`) ? /[A-T]/ : /[A-Z]/,
			);
		},
	);

	testSerial(
		'Should contain valid digits after the letter',
		nevada(),
		(serial) => {
			const digits = getEndingDigits(serial);

			expect(Number(digits)).toBeGreaterThanOrEqual(0);
			expect(Number(digits)).toBeLessThanOrEqual(
				digits === `191${interpunct}T` ? 71 : 99,
			);
		},
	);
});
