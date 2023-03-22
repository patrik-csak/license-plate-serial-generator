// Spec, as of 2019-01:
// - Format: `ABC 1234`, where `AB` is county code

import {testSerial, testSerialFormat} from '../../../tests/helpers/index.js';
import counties from './mississippi-counties.js';
import mississippi from './mississippi.js';

describe('Mississippi', () => {
	testSerialFormat(mississippi(), /[A-Z]{3} \d{4}/);

	testSerial(
		'Should start with a two-letter county code followed by a single character',
		mississippi(),
		(serial) => {
			let validCountyCodes: string[] = [];

			for (const county of counties) {
				validCountyCodes = [...validCountyCodes, ...county.codes];
			}

			expect(validCountyCodes).toContain(serial.slice(0, 2));
			expect(serial[2]).toMatch(/[A-Z]/);
		},
	);
});
