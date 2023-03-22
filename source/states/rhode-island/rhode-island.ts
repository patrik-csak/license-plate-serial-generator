import {random as randomBb26} from 'bb26';
import randomInt from 'random-int';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib/index.js';

/** @ignore */
export function alphaNumeric(): string {
	const letters = randomBb26('AA', 'ZZ');
	const numbers = randomInt(10, 999);

	return `${letters}-${numbers}`;
}

/** @ignore */
export function numeric(): string {
	return randomNumericString(99_999);
}

/**
 * Generates random serial for [Rhode Island](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Rhode_Island#1961_to_present)
 *
 * **Serial formats**:
 *
 * - Numeric: `12345`
 * - Alpha-numeric: `AB-12`, `AB-123`
 *
 * ```
 * import { rhodeIsland } from 'license-plate-serial-generator'
 *
 * // Numeric
 * rhodeIsland() // '56245'
 *
 * // Alpha-numeric
 * rhodeIsland() // 'UX-561'
 * ```
 */
export default function rhodeIsland() {
	return randomItem([alphaNumeric, numeric])();
}
