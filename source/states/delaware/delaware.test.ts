// Spec:
// - Format: `123456`
// - Range: `4` to `999999`

import delaware from './delaware';
import {testSerial, testSerialFormat} from '../../../tests/helpers';

describe('Delaware', () => {
	testSerialFormat(delaware(), /\d{1,6}/);

	testSerial('Should be a valid number', delaware(), (serial) => {
		expect(Number(serial)).toBeGreaterThanOrEqual(4);
		expect(Number(serial)).toBeLessThanOrEqual(999999);
	});
});
