import {range as bb26Range} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Kansas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Kansas#1975_to_present) as of 2021-09-25
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 LJX` to `302 PKZ`
 *
 * **Constraints**:
 *
 * - Letters `I`, `O`, and `Q` not used after `FFQ`
 * - Number `666` not used
 *
 * ```
 * import { kansas } from 'license-plate-serial-generator'
 *
 * kansas() // '245 SGG'
 * ```
 */
export default function kansas(): string {
	const numbers = randomNumericString(302);
	const lettersRange = bb26Range(
		numbers === '000' ? 'LJX' : 'AAA',
		numbers === '302' ? 'PLA' : 'AAAA',
	).filter((letters) => !/[IOQ]/.test(letters));
	const letters = randomItem(lettersRange);

	return `${numbers} ${letters}`;
}
