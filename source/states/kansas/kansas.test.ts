import {range as bb26Range} from 'bb26';
import {
	getBeginningDigits,
	getEndingLetters,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import kansas from './kansas.js';

describe('Kansas', () => {
	testSerialFormat(kansas(), /^\d{3} [A-Z]+$/);

	testSerial('Should contain valid digits', kansas(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(digits.length).toBe(3);

		expect(Number(digits)).toBeGreaterThanOrEqual(0);
		expect(Number(digits)).toBeLessThanOrEqual(302);
		expect(Number(digits)).not.toEqual(666);
	});

	testSerial('Should contain valid letters', kansas(), (serial) => {
		const digits = getBeginningDigits(serial);
		const letters = getEndingLetters(serial);

		expect(letters.length).toBe(3);

		const validLetters = bb26Range(
			digits === '000' ? 'LJX' : 'AAA',
			digits === '302' ? 'PLA' : 'AAAA',
		).filter((letters) => !/[IOQ]/.test(letters));

		expect(validLetters).toContain(letters);
	});
});
