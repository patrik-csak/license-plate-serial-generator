import {bb26Random} from 'bb26';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Alabama](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alabama#1976_to_present)
 *
 * **Serial format**: `0AB1234` or `00AB123`, where `0` or `00` is county code
 *
 * ```
 * import { alabama } from 'license-plate-serial-generator'
 *
 * alabama() // '37KA7685'
 * ```
 */
export default function alabama(): string {
	// TODO: Weigh county code choice based on population
	const county = randomNumericString(1, 67);
	const letters = bb26Random('AA', 'ZZ');
	const digits = randomNumericString(county.length === 2 ? 9999 : 999);

	return county + letters + digits;
}
