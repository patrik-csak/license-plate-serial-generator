// Spec:
// - Formats:
//   - `1-12345`
//   - `11-12345`
// - First digit/digits county code

import getRange from 'get-range';
import {
	getBeginningDigits,
	getEndingDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import wyoming from './wyoming.js';

describe('Wyoming', () => {
	testSerialFormat(wyoming(), /^\d{1,2}-\d{5}$/);

	testSerial('Should contain valid county code', wyoming(), (serial) => {
		const countyCode = getBeginningDigits(serial);

		expect(countyCode.length).toBeGreaterThanOrEqual(1);
		expect(countyCode.length).toBeLessThanOrEqual(2);

		const validDigits: number[] = [...getRange({start: 1, end: 23}), 99];

		expect(validDigits).toContain(Number(countyCode));
	});

	testSerial('Should contain valid digits', wyoming(), (serial) => {
		const digits = getEndingDigits(serial);

		expect(digits.length).toBe(5);
	});
});
