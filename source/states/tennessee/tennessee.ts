import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Tennessee](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Tennessee#1962_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `BBB-001` to `BVK-999`
 *
 * ```
 * import { tennessee } from 'license-plate-serial-generator'
 *
 * tennessee() // '26E 391'
 * ```
 */
export default function tennessee(): string {
	const letters = randomBb26('BBB', 'BTG');
	const numbers = randomNumericString(1, 999);

	return `${letters}-${numbers}`;
}
