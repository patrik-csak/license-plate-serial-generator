import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [New Mexico](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Mexico#1961_to_present)
 *
 * **Serial format**: `123-ABC`
 *
 * **Serial range**: `001-MAA` to `999-WJT`
 *
 * ```
 * import { newMexico } from 'license-plate-serial-generator'
 *
 * newMexico() // 'A46-TEL'
 * ```
 */
export default function newMexico(): string {
	const digits = randomNumericString(1, 999);
	const letters = randomBb26(
		digits === '001' ? 'MAA' : 'AAA',
		digits === '999' ? 'WJT' : 'ZZZ',
	);

	return `${digits}-${letters}`;
}
