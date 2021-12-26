import {bb26Range} from 'bb26';
import random from 'lodash.random';
import randomItem from 'random-item';

/**
 * Generates random serial for [Maine](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Maine#1950_to_present)
 *
 * **Serial format**: `1234 AB`
 *
 * **Serial range**: `1 GA` to `5252 XK`
 *
 * ```
 * import { maine } from 'license-plate-serial-generator'
 *
 * maine() // '1837 AJ'
 * ```
 */
export default function maine(): string {
	const digits = random(5252);

	const validLetters = bb26Range(
		digits === 1 ? 'GA' : 'AA',
		digits === 5252 ? 'XL' : 'AAA'
	).filter((letters) => !letters.includes('O'));

	const letters = randomItem(validLetters);

	return `${digits} ${letters}`;
}
