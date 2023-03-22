import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Iowa](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Iowa#1972_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `GXV 200` to `IBB 999`
 *
 * ```
 * import { iowa } from 'license-plate-serial-generator'
 *
 * iowa() // 'HML 979'
 * ```
 */
export default function iowa(): string {
	const letters = randomBb26('GXV', 'IBC');
	const lower = 0;
	const upper = letters === 'hah' ? 57 : 999;
	const numbers = randomNumericString(lower, upper, 3);

	return `${letters} ${numbers}`;
}
