import {random as randomBb26, range as bb26Range} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib/index.js';

/** @ignore */
export function hawaiiCounty(): string {
	const letters = randomItem(['H', 'Z']) + randomBb26('AA', 'AAA');
	const digits = randomNumericString(999);

	return `${letters} ${digits}`;
}

/** @ignore */
export function honoluluCounty(): string {
	const county = randomItem(['E', 'F', 'G', 'J', 'N', 'P', 'R', 'S', 'T']);
	const validLetters = bb26Range('AA', county === 'T' ? 'TU' : 'AAA').filter(
		(letters) => !/[HKLM]/.test(letters),
	);
	const letters = randomItem(validLetters);
	const numbers = randomNumericString(999);

	return `${county}${letters} ${numbers}`;
}

/** @ignore */
export function kauaiCounty(): string {
	const letters = randomBb26('AA', 'AAA');
	const numbers = randomNumericString(999);

	return `K${letters} ${numbers}`;
}

/** @ignore */
export function mauiCounty(): string {
	const county = randomItem(['M', 'L']);
	const letters = randomBb26('AA', 'AAA');
	const numbers = randomNumericString(999);

	return `${county}${letters} ${numbers}`;
}

/**
 * Generates random serial for [Hawaii](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Hawaii#1953_to_present)
 *
 * **Serial format**:
 *
 * - Hawaiʻi County: `HAB 123` or `ZAB 123`
 * - Honolulu county: `ABC 123`
 *   - First letter is A-G, J, N, P, or R-Y
 *   - Sequence may not include H, K, L, or M in any position
 * - Kauaʻi County: `KAB 123`
 * - Maui County: `MAB 123` or `LAB 123`
 *
 * ```
 * import { hawaii } from 'license-plate-serial-generator'
 *
 * hawaii() // Hawaiʻi County: 'HJM 033'
 * hawaii() // Honolulu County: 'GCN 527'
 * hawaii() // Kauaʻi County: 'KEF 722'
 * hawaii() // Maui County: 'MHQ 397'
 * ```
 */
export default function hawaii(): string {
	// TODO: Weigh county choice based on population
	return randomItem([hawaiiCounty, honoluluCounty, kauaiCounty, mauiCounty])();
}
