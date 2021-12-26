import {random as randomBb26} from 'bb26';
import randomInt from 'random-int';
import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Montana](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Montana#1976_to_present)
 *
 * **Serial format**: `1-12345A` or `10-1234A`, where left half is county code
 *
 * ```
 * import { montana } from 'license-plate-serial-generator'
 *
 * montana() // '5-95754R'
 * ```
 */
export default function montana(): string {
	// TODO: Weigh county choice by population
	const county = randomInt(1, 56).toString();
	const numbers = randomNumericString(county.length === 1 ? 99999 : 9999);
	const letter = randomBb26('Z');

	return `${county}-${numbers}${letter}`;
}
