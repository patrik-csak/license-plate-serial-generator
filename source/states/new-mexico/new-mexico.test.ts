// Spec, as of 2019-05-20):
// - Format: `123-ABC`
// - Range: `001-MAA` to `999-WJT`

import {
	getBeginningDigits,
	testSerial,
	testSerialFormat,
} from '../../../tests/helpers/index.js';
import newMexico from './new-mexico.js';

describe('New Mexico', () => {
	testSerialFormat(newMexico(), /^\d{3}-[A-Z]+$/);

	testSerial('Should contain the correct digits', newMexico(), (serial) => {
		const digits = getBeginningDigits(serial);

		expect(digits.length).toBe(3);

		expect(Number(digits)).toBeGreaterThanOrEqual(1);
	});
});
