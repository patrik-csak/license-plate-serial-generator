import {random as randomBb26} from 'bb26';
import getRange from 'get-range';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib/index.js';

/** @ignore */
export function countyCoded(county: number): string {
	const letters = `${county}-${randomBb26('ZZ')}`;
	const digits = randomNumericString(10 ** (7 - letters.length) - 1);

	return letters + digits;
}

/** @ignore */
export function abc123(): string {
	const letters = randomBb26('UMA', 'WDH');
	const numbers = randomNumericString(999);

	return `${letters} ${numbers}`;
}

/**
 * Generates random serial for [Nebraska](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Nebraska#1966_to_present)
 *
 * **Serial formats**:
 *
 * - Douglas, Lancaster, and Sarpy counties: `ABC 123`
 * - Other counties:
 *   - `X-A1234`
 *   - `X-AB123`
 *   - `XX-A123`
 *   - `XX-AB12`
 *
 * **Serial ranges**:
 *
 * - Douglas, Lancaster, and Sarpy counties: Mid-`U` series to `WDH 999`
 *
 * ```
 * import {nebraska } from 'license-plate-serial-generator'
 *
 * // Douglas, Lancaster, and Sarpy counties
 * nebraska() // 'VKO 137'
 *
 * // Other counties
 * nebraska() // '14-QD84'
 * ```
 */
export default function nebraska(): string {
	const counties = [...getRange({start: 1, end: 93})];
	// TODO: Weigh county choice by population
	const county = randomItem(counties);

	return [1, 2, 59].includes(county) ? abc123() : countyCoded(county);
}
