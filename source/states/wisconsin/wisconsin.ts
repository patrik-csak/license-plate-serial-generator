import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Wisconsin](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Wisconsin#1968_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `AAA-1001` to `AFR-2643`
 *
 * ```
 * import { wisconsin } from 'license-plate-serial-generator'
 *
 * wisconsin() // 'AFF-2603'
 * ```
 */
export default function wisconsin(): string {
	const letters = randomBb26('AAA', 'AFR');
	const numbers = randomNumericString(
		letters === 'AAA' ? 1001 : 0,
		letters === 'AFR' ? 2743 : 9999
	);

	return `${letters}-${numbers}`.toUpperCase();
}
