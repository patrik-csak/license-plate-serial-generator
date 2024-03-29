// Spec, as of 2019-05-04:
// - Format: `123 4567`
// - Range: `100 0000` to `458 5718`

import newHampshire from './new-hampshire';
import {testSerial, testSerialFormat} from '../../../tests/helpers';

describe('New Hampshire', () => {
	testSerialFormat(newHampshire(), /^\d{3} \d{4}$/);

	testSerial('Should contain valid digits', newHampshire(), (serial) => {
		serial = serial.replace(' ', '');

		expect(Number(serial)).toBeGreaterThanOrEqual(1000000);
		expect(Number(serial)).toBeLessThanOrEqual(4585718);
	});
});
