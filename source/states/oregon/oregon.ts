import {bb26Random} from 'bb26';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Oregon](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Oregon#1950_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `001 BAA` to `006 LPV`
 *
 * ```
 * import { oregon } from 'license-plate-serial-generator'
 *
 * oregon() // '285 JJH'
 * ```
 */
export default function oregon(): string {
	const letters = bb26Random('BAA', 'KUH');
	const numbers = randomNumericString(1, 999);

	return `${numbers} ${letters}`;
}
