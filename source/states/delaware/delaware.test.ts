// Spec:
// - Format: `123456`
// - Range: `4` to `999999`

import {testSerial, testSerialFormat} from '../../../tests/helpers/index.js';
import delaware from './delaware.js';

describe('Delaware', () => {
	testSerialFormat(delaware(), /\d{1,6}/);

	testSerial('Should be a valid number', delaware(), (serial) => {
		expect(Number(serial)).toBeGreaterThanOrEqual(4);
		expect(Number(serial)).toBeLessThanOrEqual(999_999);
	});
});
