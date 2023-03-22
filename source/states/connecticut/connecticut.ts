import {random as randomBb26} from 'bb26';
import {interpunct, randomNumericString} from '../../lib/index.js';

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
	const letters = randomBb26('AA', 'AW');
	const numbers = randomNumericString(1, letters === 'AV' ? 42 : 99_999, 5);

	return letters + interpunct + numbers;
}
