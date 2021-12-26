import {bb26Random} from 'bb26';

import {interpunct, randomNumericString} from '../../lib';

/**
 * Generates random serial for [Nevada](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nevada#1960_to_present)
 *
 * **Serial format**: `123·A45`
 *
 * **Serial range**: `001·A00` to `868·J40`
 *
 * ```
 * import { nevada } from 'license-plate-serial-generator'
 *
 * nevada() // '927·D40'
 * ```
 */
export default function nevada() {
	const left = randomNumericString(1, 999);
	const letter = bb26Random('E');
	const right = randomNumericString(letter === 'e' ? 49 : 99);

	return left + interpunct + letter + right;
}
