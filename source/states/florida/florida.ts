import {bb26Random} from 'bb26';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Florida](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Florida#1974_to_present)
 *
 * **Serial format**: `Z12 3BC`
 *
 * **Serial range**: `Z00 0AA` to `Z89 0FW`
 *
 * ```
 * import { florida } from 'license-plate-serial-generator'
 *
 * florida() // 'Z36 5BG'
 * ```
 */
export default function florida(): string {
	const digits = randomNumericString(890);
	let left = 'Z';
	let right = '';

	left += digits.slice(0, 2);
	right += digits[2];
	right += bb26Random('AA', digits === '890' ? 'FY' : 'AAA');

	return `${left} ${right}`;
}
