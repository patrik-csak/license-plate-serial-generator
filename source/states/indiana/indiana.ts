import {randomNumericString} from '../../lib';
import {bb26Random} from 'bb26';

/**
 * Generates random serial for [Indiana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Indiana#Passenger_plates_1913_to_present)
 *
 * **Serial formats**:
 *
 * - `123A`
 * - `123AB`
 * - `123ABC`
 *
 * ```
 * import { indiana } from 'license-plate-serial-generator'
 *
 * indiana() // '946XOK'
 * ```
 */
export default function indiana(): string {
	const letters: string = bb26Random('ZZZ');
	const numbers: string = randomNumericString(999);

	return `${numbers}${letters}`;
}
