import {randomNumericString} from '../../lib';
import {bb26Random} from 'bb26';

/**
 * Generates random serial for [North Dakota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_North_Dakota#1958_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 BTR` to `825 CNK`
 *
 * ```
 * import { northDakota } from 'license-plate-serial-generator'
 *
 * northDakota() // '526 XAF'
 * ```
 */
export default function northDakota(): string {
	const digits = randomNumericString(825);
	const letters = bb26Random(
		digits === '000' ? 'BTR' : 'AAA',
		digits === '825' ? 'CNL' : 'ZZZ'
	);

	return `${digits} ${letters}`;
}
