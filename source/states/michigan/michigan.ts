import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Michigan](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Michigan#1971_to_present)
 *
 * **Serial format**: `ABC 1234`
 *
 * **Serial range**: `DAA 0000` to `ECR 9999`
 *
 * ```
 * import { michigan } from 'license-plate-serial-generator'
 *
 * michigan() // 'DYI 6070'
 * ```
 */
export default function michigan(): string {
	const letters = randomBb26('DAA', 'ECR');
	const numbers = randomNumericString(9999);

	return `${letters} ${numbers}`;
}
