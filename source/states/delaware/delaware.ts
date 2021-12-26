import random from 'lodash.random';

/**
 * Generates random serial for [Delaware](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Delaware#1942_to_present)
 *
 * **Serial format**: `123456`
 *
 * **Serial range**: `4` to `999999`
 *
 * ```
 * import { delaware } from 'license-plate-serial-generator'
 *
 * delaware() // '346692'
 * ```
 */
export default function delaware(): string {
	return `${random(4, 999999)}`;
}
