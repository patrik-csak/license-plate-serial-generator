import {bb26Random} from 'bb26';
import sample from 'lodash.sample';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Maryland](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Maryland#1970_to_present)
 *
 * **Serial format**: `1AB2345`
 *
 * **Serial range**: `8CN0000` to `9DW2552`
 *
 * ```
 * import { maryland } from 'license-plate-serial-generator'
 *
 * maryland() // '9DL7397'
 * ```
 */
export default function maryland(): string {
	const digit = sample([8, 9]);
	const letters = bb26Random(
		digit === 8 ? 'CN' : 'AA',
		digit === 9 ? 'DW' : 'ZZ'
	);
	const digits = randomNumericString(
		0,
		digit + letters === '9DW' ? 2552 : 9999
	);

	return digit + letters + digits;
}
