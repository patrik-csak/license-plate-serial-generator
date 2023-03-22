import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Louisiana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Louisiana#1964_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 AAA` to `999 DEV`
 *
 * ```
 * import { louisiana } from 'license-plate-serial-generator'
 *
 * louisiana() // '594 RTX'
 * ```
 */
export default function louisiana(): string {
	const numbers = randomNumericString(999);
	const letters = randomBb26('AAA', numbers === '999' ? 'DEV' : 'ZZZ');

	return `${numbers} ${letters}`;
}
