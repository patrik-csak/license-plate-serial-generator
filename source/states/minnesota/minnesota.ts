import {bb26Random} from 'bb26';

import {randomNumericString} from '../../lib';

/**
 * Generates random serial for [Minnesota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Minnesota#1955_to_present)
 *
 * **Serial format**: `ABC-123`
 *
 * **Serial range**: `AAA-001` to `DBY-020`
 *
 * ```
 * import { minnesota } from 'license-plate-serial-generator'
 *
 * minnesota() // 'ADZ-278'
 * ```
 */
export default function minnesota(): string {
	const letters = bb26Random('AAA', 'DBY');
	const numbers = randomNumericString(1, 999);

	return `${letters}-${numbers}`;
}
