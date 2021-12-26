import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Washington](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Washington_(state)#1950_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `AAA0000` to `BPY9526`
 *
 * ```
 * import { washington } from 'license-plate-serial-generator'
 *
 * washington() // 'AZJ1213'
 * ```
 */
export default function washington(): string {
	const letters = randomBb26('AAA', 'BKU');
	const digits = randomNumericString(9999);

	return letters + digits;
}
