import {bb26Random} from 'bb26';

import {interpunct, randomNumericString} from '../../lib';

/**
 * Generates random serial for [Connecticut](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Connecticut#1957_to_present)
 *
 * **Serial format**: `AB·12345`
 *
 * **Serial range**: `AA·00001` to `AV·00042`
 *
 * ```
 * import { connecticut } from 'license-plate-serial-generator'
 *
 * connecticut() // 'AO·01229'
 * ```
 */
export default function connecticut(): string {
	const letters = bb26Random('AA', 'AW');
	const numbers = randomNumericString(1, letters === 'AV' ? 42 : 99999, 5);

	return letters + interpunct + numbers;
}
