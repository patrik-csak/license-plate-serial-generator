import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingLetters,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import newJersey from './new-jersey.js';

describe('New Jersey', () => {
	testSerialFormat(newJersey(), /^[A-Z]\d{2}-[A-Z]{3}$/);

	testSerial('Should start with a valid letter', newJersey(), (serial) => {
		const letter = getBeginningLetters(serial);

		expect(letter.length).toBe(1);
		expect(letter).toMatch(/[A-U]/);
	});

	testSerial('Should contain valid digits', newJersey(), (serial) => {
		const digits = serial.slice(1, 3);
		const letter = getBeginningLetters(serial);

		expect(Number(digits)).toBeGreaterThanOrEqual(letter === 'A' ? 10 : 0);
		expect(Number(digits)).toBeLessThanOrEqual(letter === 'U' ? 50 : 99);
	});

	testSerial('Should end with valid letters', newJersey(), (serial) => {
		const left = serial.slice(0, 3);
		const letters = getEndingLetters(serial);
		const validLetters = bb26Range(
			left === 'A10' ? 'EFF' : 'AAA',
			left === 'C62' ? 'LKB' : 'AAAA',
		);

		expect(validLetters).toContain(letters);
	});

	testSerial("Should not contain 'I', 'O', or 'Q'", newJersey(), (serial) => {
		expect(serial).not.toMatch(/[IOQ]/);
	});
});
