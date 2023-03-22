import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Vermont](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Vermont#1967_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `AAB 100` to `HNP 223`
 *
 * ```
 * import { vermont } from 'license-plate-serial-generator'
 *
 * vermont() // 'AVW 014'
 * ```
 */
export default function vermont(): string {
	const letters = randomBb26('AAB', 'HNQ');
	const numbers = randomNumericString(letters === 'HNP' ? 100 : 0, 999);

	return `${letters} ${numbers}`;
}
