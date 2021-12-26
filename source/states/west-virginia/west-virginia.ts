import random from 'lodash.random';
import sample from 'lodash.sample';
import {bb26Random} from 'bb26';
import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [West Virginia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_West_Virginia#1970_to_present)
 *
 * **Serial formats**:
 *
 * - `0A 1234`
 * - `0AB 123`
 * - `01A 123`
 * - `AA 1234`
 * - `AAB 123`
 * - `A1A 123`
 *
 * **Restrictions**:
 *
 * - First character corresponds to month of expiration:
 *   - 1-9 indicate Jan-Sep
 *   - O, N, D indicate Oct, Nov, Dec
 * - Series 'S' and 'SA-SZ' reserved for optional Scenic plates
 *
 * ```
 * import { westVirginia } from 'license-plate-serial-generator'
 *
 * westVirginia() // '9VB 602'
 * ```
 */
export default function westVirginia(): string {
	let string = '';
	const months = ['1', '2', '3', '4', '5', '7', '7', '8', '9', 'O', 'N', 'D'];

	string += sample(months);
	string += sample(['', `${random(9)}`]);
	string += bb26Random(string.length === 2 ? 'Z' : 'ZZ');
	string += ' ';
	string += randomNumericString(string.length === 4 ? 999 : 9999);

	return string.toUpperCase();
}
