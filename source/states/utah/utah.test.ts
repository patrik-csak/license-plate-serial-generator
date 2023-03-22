// Spec, as of 2019-05:
// - Arch:
//   - Format: 'A12 3BC'
//   - Range: 'Z00 1AA' to 'V21 5RK' (progressed backwards)
// - God:
//   - Format: '1A2BC'
//   - Range: '0A0AA' to '5E1NY'
// - Ski:
//   - Format: 'A12 3BC'
//   - Range: 'A00 1AA' to 'F76 4TE'

import {range as bb26Range} from 'bb26';
import {
	getBeginningLetters,
	getEndingLetters,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import utah, {arch, god, ski} from './utah.js';

const archRegex = /^[A-Z]\d{2} \d[A-Z]{2}$/;
const godRegex = /^\d[A-Z]\d[A-Z]{2}$/;
const skiRegex = /^[A-Z]\d{2} \d[A-Z]{2}$/;

describe('Utah', () => {
	describe('Arch', () => {
		testSerialFormat(utah(), [archRegex, godRegex, skiRegex]);

		testSerial('Should start with a valid letter', arch(), (serial) => {
			const letter = getBeginningLetters(serial);

			expect(letter).toMatch(/^[V-Z]$/);
		});

		testSerial('Should contain valid digits', arch(), (serial) => {
			const letter = getBeginningLetters(serial);
			const digits = serial.slice(1, 5).replace(' ', '');

			expect(Number(digits)).toBeGreaterThanOrEqual(letter === 'V' ? 215 : 0);
			expect(Number(digits)).toBeLessThanOrEqual(letter === 'Z' ? 1 : 999);
		});

		testSerial('Should end with valid letters', arch(), (serial) => {
			const letters = getEndingLetters(serial);
			const validLetters = bb26Range(
				serial.startsWith('V21 5') ? 'RK' : 'AA',
				serial.startsWith('Z00 1') ? 'AB' : 'AAA',
			);

			expect(validLetters).toContain(letters);
		});
	});

	describe('God', () => {
		testSerialFormat(god(), godRegex);

		testSerial('Should start with a valid digit', god(), (serial) => {
			const digit = serial[0];

			expect(Number(digit)).toBeGreaterThanOrEqual(0);
			expect(Number(digit)).toBeLessThanOrEqual(5);
		});

		testSerial('Should contain a valid letter', god(), (serial) => {
			const letter = serial[1];

			const validLetters = bb26Range('A', serial.startsWith('5') ? 'F' : 'Z');

			expect(validLetters).toContain(letter);
		});

		testSerial('Should contain a second valid digit', god(), (serial) => {
			const digit = serial[2];

			expect(Number(digit)).toBeGreaterThanOrEqual(0);
			expect(Number(digit)).toBeLessThanOrEqual(
				serial.startsWith('5E') ? 1 : 9,
			);
		});

		testSerial('Should end with valid letters', god(), (serial) => {
			const letters = getEndingLetters(serial);
			const validLetters = bb26Range(
				'AA',
				serial.startsWith('5E1') ? 'NZ' : 'AAA',
			);

			expect(validLetters).toContain(letters);
		});
	});

	describe('Ski', () => {
		testSerialFormat(ski(), skiRegex);

		testSerial('Should start with a valid letter', ski(), (serial) => {
			const letter = getBeginningLetters(serial);
			const validLetters = bb26Range('G');

			expect(validLetters).toContain(letter);
		});

		testSerial('Should contain valid digits', ski(), (serial) => {
			const digits = serial.slice(1, 3) + serial.slice(4, 5);
			const letter = getBeginningLetters(serial);

			expect(Number(digits)).toBeGreaterThanOrEqual(1);
			expect(Number(digits)).toBeLessThanOrEqual(letter === 'F' ? 764 : 999);
		});
	});
});
