import getRange from 'get-range';
import randomItem from 'random-item';
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
	const county = randomItem([...getRange({start: 1, end: 23}), 99]);
	const digits = randomNumericString(99999);

	return `${county}-${digits}`;
}
