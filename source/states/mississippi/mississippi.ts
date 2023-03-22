import {random as randomBb26} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib/index.js';
import counties from './mississippi-counties.js';

/**
 * Generates random serial for [Mississippi](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Mississippi#1976_to_present)
 *
 * **Serial format**: `ABC 1234`, where `AB` is county code
 *
 * ```
 * import { mississippi } from 'license-plate-serial-generator'
 *
 * mississippi() // 'CRW 1349'
 * ```
 */
export default function mississippi(): string {
	// TODO: Weigh county choice by population
	const county = randomItem(randomItem(counties).codes);
	const letters = county + randomBb26('Z');
	const numbers = randomNumericString(9999);

	return `${letters} ${numbers}`;
}
