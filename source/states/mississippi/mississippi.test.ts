// Spec, as of 2019-01:
// - Format: `ABC 1234`, where `AB` is county code

import counties from './mississippi-counties';
import mississippi from './mississippi';
import {testSerial, testSerialFormat} from '../../../tests/helpers';

describe('Mississippi', () => {
	testSerialFormat(mississippi(), /[A-Z]{3} \d{4}/);

	testSerial(
		'Should start with a two-letter county code followed by a single character',
		mississippi(),
		(serial) => {
			const validCountyCodes = counties.reduce<string[]>(
				(codes, county) => codes.concat(county.codes),
				[]
			);

			expect(validCountyCodes).toContain(serial.slice(0, 2));
			expect(serial[2]).toMatch(/[A-Z]/);
		}
	);
});
