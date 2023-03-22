import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [South Carolina](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_South_Carolina#1976_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `LZD 101` to `RFE 478`
 *
 * ```
 * import { southCarolina } from 'license-plate-serial-generator'
 *
 * southCarolina() // 'OVL 579'
 * ```
 */
export default function southCarolina(): string {
	const letters = randomBb26('LZD', 'PVY');
	const numbers = randomNumericString(letters === 'LZD' ? 101 : 0, 999);

	return `${letters} ${numbers}`;
}
