import {randomNumericString} from '../../lib';
import {bb26Random} from 'bb26';

/**
 * Generates random serial for [Pennsylvania](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Pennsylvania#1958_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial range**: `KLF-0000 to LBP-1791`
 *
 * ```
 * import { pennsylvania } from 'license-plate-serial-generator'
 *
 * pennsylvania() // 'KSS-6213'
 * ```
 */
export default function pennsylvania(): string {
	const letters = bb26Random('KLF', 'KTL');
	const numbers = randomNumericString(9999);

	return `${letters}-${numbers}`;
}
