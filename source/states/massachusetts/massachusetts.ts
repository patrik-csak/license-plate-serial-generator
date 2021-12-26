import {bb26Range} from 'bb26';
import sample from 'lodash.sample';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Massachusetts](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Massachusetts#1967_to_present)
 *
 * **Serial format**: `1ABC 23`
 *
 * **Serial range**: `1AAA 10` to `9ZZZ 99`
 *
 * **Restrictions**: Letters `I`, `O`, `Q`, and `U` not used
 *
 * ```
 * import { massachusetts } from 'license-plate-serial-generator'
 *
 * massachusetts() // '1JPW 65'
 * ```
 */
export default function massachusetts(): string {
	const validLetters = bb26Range('AAA', 'AAAA').filter(
		(letters) => !/[IOQU]/.test(letters)
	);
	const letters = sample(validLetters);
	const numbers = randomNumericString(letters === 'AAA' ? 10 : 0, 99);

	return `1${letters} ${numbers}`;
}
