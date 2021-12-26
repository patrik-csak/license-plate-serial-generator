import {bb26Range} from 'bb26';
import sample from 'lodash.sample';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [New Jersey](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Jersey#1959_to_present)
 *
 * **Serial format**: `A12-BCD`
 *
 * **Serial range**: `A10-EFF` to `C62-LKA`
 *
 * **Restrictions**: `I`, `O`, `Q` not used in any position
 *
 * ```
 * import { newJersey } from 'license-plate-serial-generator'
 *
 * newJersey() // 'C60-ZKE'
 * ```
 */
export default function newJersey(): string {
	let left = sample(bb26Range('D').filter((string) => !/[IOQ]/.test(string)));
	left += randomNumericString(left === 'a' ? 10 : 0, left === 'c' ? 62 : 99);

	const right = sample(
		bb26Range(
			left === 'A10' ? 'EFF' : 'AAA',
			left === 'C62' ? 'LKB' : 'AAAA'
		).filter((string) => !/[IOQ]/.test(string))
	);

	return `${left}-${right}`;
}
