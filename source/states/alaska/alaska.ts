import {range as bb26Range} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Alaska](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alaska#1953_to_present)
 *
 * **Serial format**: `ABC 123`
 *
 * **Serial range**: `FUZ 100` to `FUZ 999`, `GAA 100` to `GZZ 999`, `KAA 100` to `KDY 641`
 *
 * ```
 * import { alaska } from 'license-plate-serial-generator'
 *
 * alaska() // 'KCA 245'
 * ```
 */
export default function alaska(): string {
	const validLetters = ['FUZ']
		.concat(bb26Range('GAA', 'HAA'))
		.concat(bb26Range('KAA', 'KDZ'));
	const letters = randomItem(validLetters);
	const numbers = randomNumericString(100, 999);

	return `${letters} ${numbers}`;
}
