import sample from 'lodash.sample';

import {randomNumericString} from '../../lib';
import {bb26Random} from 'bb26';

/** @ignore */
interface Month {
	codes: string[];
}

/** @ignore */
const months: Month[] = [
	{codes: ['A', 'B']},
	{codes: ['C']},
	{codes: ['D', 'E']},
	{codes: ['F', 'G']},
	{codes: ['H', 'J']},
	{codes: ['K', 'L']},
	{codes: ['M', 'N']},
	{codes: ['P', 'R']},
	{codes: ['S', 'T']},
	{codes: ['U', 'V']},
	{codes: ['W', 'X']},
	{codes: ['Y', 'Z']}
];

/**
 * Generates random serial for [Missouri](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Missouri#1980_to_present)
 *
 * **Serial format**: `XA1 B2C`, where `X` corresponds to month of expiration
 *
 * ```
 * import { missouri } from 'license-plate-serial-generator'
 *
 * missouri() // 'DB0 A0H'
 * ```
 */
export default function missouri(): string {
	const month = sample(sample(months)!.codes)!;
	const left = month + bb26Random('Z') + randomNumericString(9);
	const right = bb26Random('Z') + randomNumericString(9) + bb26Random('Z');

	return `${left} ${right}`;
}
