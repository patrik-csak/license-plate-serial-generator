// Spec, as of 2014-01-02:
// - Format: 0AB1234 or 00AB123
// - `0` or `00` is county code

import getRange from 'get-range';
import {getBeginningDigits, testSerial} from '../../../tests/helpers/index.js';
import alabama from './alabama.js';

// https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alabama#County_coding
const countyCodes = [...getRange({start: 1, end: 68}), 70, 80];

describe('Alabama', () => {
	testSerial('Should start with county code', alabama(), (serial) => {
		const countyCode = getBeginningDigits(serial);

		expect(countyCode.length).toBeGreaterThanOrEqual(1);
		expect(countyCode.length).toBeLessThanOrEqual(2);
		expect(countyCodes).toContain(Number(countyCode));
	});

	testSerial(
		'Should contain two letters after the county code',
		alabama(),
		(serial) => {
			const countyCode = getBeginningDigits(serial);

			const letters = serial.slice(countyCode.length, 2 + countyCode.length);

			expect(letters).toMatch(/[A-Z]{2}/);
		},
	);

	testSerial('Should end with digits', alabama(), (serial) => {
		const countyCode = getBeginningDigits(serial);

		const digits = serial.slice(Math.max(0, 2 + countyCode.length));

		expect(digits).toMatch(new RegExp(`\\d{${5 - countyCode.length}}`));
	});
});
