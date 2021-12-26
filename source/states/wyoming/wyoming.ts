import range from 'lodash.range';
import sample from 'lodash.sample';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Wyoming](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Wyoming#1975_to_present)
 *
 * **Serial formats**:
 *
 * - `1-12345`
 * - `11-12345`
 *
 * ```
 * import { wyoming } from 'license-plate-serial-generator'
 *
 * wyoming() // '4-62332'
 * ```
 */
export default function wyoming(): string {
	// TODO: Weigh county choice based on population
	const county = sample(range(1, 23).concat(99));
	const digits = randomNumericString(99999);

	return `${county}-${digits}`;
}
