import {random as randomBb26} from 'bb26';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Oklahoma](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Oklahoma#1979_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `AAA-001` to `JRK-999`
 *
 * ```
 * import { oklahoma } from 'license-plate-serial-generator'
 *
 * oklahoma() // 'HHQ-386'
 * ```
 */
export default function oklahoma(): string {
	const letters = randomBb26('AAA', 'JRL');
	const numbers = randomNumericString(1, 999);

	return `${letters}-${numbers}`.toUpperCase();
}
