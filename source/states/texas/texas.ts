import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Texas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Texas#1975_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `BBB-0001` to `MCZ-9999`
 *
 * ```
 * import { texas } from 'license-plate-serial-generator'
 *
 * texas() // 'BSD-7082'
 * ```
 */
export default function texas(): string {
	const letters = randomBb26('BBB', 'KZR');
	const numbers = randomNumericString(1, 9999);

	return `${letters}-${numbers}`;
}
