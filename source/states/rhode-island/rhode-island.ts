import {bb26Random} from 'bb26';
import random from 'lodash.random';

import {randomNumericString} from '../../lib';
import randomItem from 'random-item';

/** @ignore */
export function alphaNumeric(): string {
	const letters = bb26Random('AA', 'ZZ');
	const numbers = random(10, 999);

	return `${letters}-${numbers}`;
}

/** @ignore */
export function numeric(): string {
	return randomNumericString(99999);
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
