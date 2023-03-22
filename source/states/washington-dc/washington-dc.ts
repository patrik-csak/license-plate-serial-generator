import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Washington, D.C.](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Washington,_D.C.#1966_to_present)
 *
 * **Serial format**: `AB-1234`
 *
 * **Serial range**: `FN-4000` to `GB-4718`
 *
 * ```
 * import { washingtonDc } from 'license-plate-serial-generator'
 *
 * washingtonDc() // 'FS-6566'
 * ```
 */
export default function washingtonDc(): string {
	const letters = randomBb26('FN', 'GB');
	const numbers = randomNumericString(
		letters === 'FN' ? 4000 : 0,
		letters === 'GB' ? 4718 : 9999,
	);

	return `${letters}-${numbers}`;
}
