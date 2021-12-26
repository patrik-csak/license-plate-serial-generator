// Spec, as of 2019-04-09:
// - Douglas, Lancaster, and Sarpy counties:
//   - `ABC 123`
//   - Mid-'U' series to 'WDH 999'
// - Other counties:
//   - `X-A1234`
//   - `X-AB123`
//   - `XX-A123`
//   - `XX-AB12`

import {bb26Range} from 'bb26';
import random from 'lodash.random';

import nebraska, {abc123, countyCoded} from './nebraska';
import {
	getBeginningDigits,
	getBeginningLetters,
	getEndingDigits,
	testSerial,
	testSerialFormat
} from '../../../tests/helpers';

const abc123Regex = /^[A-Z]{3} \d{3}$/;
const countyCodedRegex = /^\d{1,2}-[A-Z]{1,2}\d{2,4}$/;

describe('Nebraska', () => {
	testSerialFormat(nebraska(), [abc123Regex, countyCodedRegex]);

	describe('ABC 123', () => {
		testSerialFormat(abc123(), abc123Regex);

		testSerial('Should contain valid letters', abc123(), (serial) => {
			const letters = getBeginningLetters(serial);
			const validLetters = bb26Range('UMA', 'WDI');

			expect(letters.length).toBe(3);
			expect(validLetters).toContain(letters);
		});

		testSerial('Should contain valid digits', abc123(), (serial) => {
			const digits = getEndingDigits(serial);

			expect(digits.length).toBe(3);
			expect(Number(digits)).toBeGreaterThanOrEqual(0);
			expect(Number(digits)).toBeLessThanOrEqual(999);
		});
	});

	describe('County-coded', () => {
		const randomCounty = () => random(1, 93);

		const county = randomCounty();

		describe(`County #${county}`, () => {
			testSerialFormat(countyCoded(county), countyCodedRegex);

			testSerial(
				'Should start with the county code',
				countyCoded(county),
				(serial) => {
					const countyCode = getBeginningDigits(serial);

					expect(Number(countyCode)).toBe(county);
				}
			);

			testSerial(
				'Should contain valid right half',
				countyCoded(county),
				(serial) => {
					const matches = /^(\d+)-([A-Z]+)(\d+)$/.exec(serial);
					const countyCode = matches ? matches[1] : '';
					const digits = matches ? matches[3] : '';
					const letters = matches ? matches[2] : '';

					expect(letters.length).toBeGreaterThanOrEqual(1);
					expect(letters.length).toBeLessThanOrEqual(2);
					expect(digits.length).toBe(6 - countyCode.length - letters.length);
				}
			);
		});
	});
});
