import {range as bb26Range} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [New Jersey](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_New_Jersey#1959_to_present) (as of 2021-21-14)
 *
 * **Serial format**: `A12-BCD`
 *
 * **Serial range**: `A10-EFF` to `U50-PMC`
 *
 * **Restrictions**: `I`, `O`, `Q` not used in any position
 *
 * ```
 * import { newJersey } from 'license-plate-serial-generator'
 *
 * newJersey() // 'L11-HWC'
 * ```
 */
export default function newJersey(): string {
	let left = randomItem(
		bb26Range('V').filter((string) => !/[IOQ]/.test(string))
	);
	left += randomNumericString(left === 'A' ? 10 : 0, left === 'U' ? 50 : 99);

	const right = randomItem(
		bb26Range(
			left === 'A10' ? 'EFF' : 'AAA',
			left === 'U50' ? 'PMD' : 'AAAA'
		).filter((string) => !/[IOQ]/.test(string))
	);

	return `${left}-${right}`;
}
