import {random as randomBb26} from 'bb26';
import {interpunct, randomNumericString} from '../../lib';

/**
 * Generates random serial for [Nevada](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nevada#1960_to_present) as of 2021-12-11
 *
 * **Serial format**: `123·A45`
 *
 * **Serial range**: `001·A00` to `191·T71`
 *
 * ```
 * import { nevada } from 'license-plate-serial-generator'
 *
 * nevada() // '016·S63'
 * ```
 */
export default function nevada() {
	const left = randomNumericString(1, 191);
	const letter = randomBb26(left === '191' ? 'T' : 'Z');
	const right = randomNumericString(
		`${left}${interpunct}${letter}` === `191${interpunct}T` ? 71 : 99
	);

	return left + interpunct + letter + right;
}
