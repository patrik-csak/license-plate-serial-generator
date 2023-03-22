// Spec:
// - Formats, where `A` or `0A` is county code
//   - `A 123456` or
//   - `0A 12345` or
//   - `0A A1234` or
//   - `0A AB123` or
//   - `0A 1A234` or
//   - `0A 1234A` or
//   - `0A 123AB` or
//   - `10B 1234` or
//   - `10B A123`

import {testSerial} from '../../../tests/helpers/index.js';
import idaho from './idaho.js';

describe('Idaho', () => {
	testSerial('Should start with county code', idaho(), (serial) => {
		expect(serial).toMatch(/^([A-Z]|\d[A-Z]|10B) /);
	});

	testSerial('Should end correctly', idaho(), (serial) => {
		expect(serial).toMatch(/^([A-Z]|\d[A-Z]|10B) /);
		expect(serial).toMatch(
			/ (\d{4,6}|[A-Z]\d{3,4}|[A-Z]{2}\d{3}|\d[A-Z]\d{3}|\d{4}[A-Z]|\d{3}[A-Z]{2})$/,
		);
	});
});
