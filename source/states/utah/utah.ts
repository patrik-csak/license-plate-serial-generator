import {bb26Random} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib';

/** @ignore */
export function arch(): string {
	const letter = bb26Random('V', 'Z');
	const digits = randomNumericString(
		letter === 'V' ? 215 : 1,
		letter === 'Z' ? 1 : 999,
		3
	);
	const letters = bb26Random(
		letter + digits === 'V215' ? 'RK' : 'AA',
		letter + digits === 'Z001' ? 'AA' : 'AAA'
	);
	const left = letter + digits.slice(0, 2);
	const right = digits.slice(2) + letters;

	return `${left} ${right}`;
}

/** @ignore */
export function god(): string {
	let serial = randomNumericString(5);
	serial += bb26Random(serial === '5' ? 'E' : 'Z');
	serial += randomNumericString(serial === '5E' ? 1 : 9);
	serial += bb26Random('AA', serial === '5E1' ? 'NZ' : 'AAA');

	return serial;
}

/** @ignore */
export function ski(): string {
	const numbers = randomNumericString(1, 999);
	const left = bb26Random('F') + numbers.slice(0, 2);
	const right = numbers.slice(2) + bb26Random('AA', 'KB');

	return `${left} ${right}`;
}

/**
 * Generates random serial for [Utah](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Utah#1968_to_present)
 *
 * **Serial formats**:
 *
 * - Arches: `A12 3BC`
 * - In God We Trust: `1A2BC`
 * - Skier: `A12 3BC`
 *
 * **Serial ranges**:
 *
 * - Arches: `Z00 1AA` to `V21 5RK` (progressed backwards)
 * - In God We Trust: `0A0AA` to `5E1NY`
 * - Skier: `A00 1AA` to `F76 4TE`
 *
 * ```
 * import { utah } from 'license-plate-serial-generator'
 *
 * // Arches
 * utah() // 'X03 6XV'
 *
 * // In God We Trust
 * utah() // '5D2MY'
 *
 * // Skier
 * utah() // 'D38 1CT'
 * ```
 */
export default function utah(): string {
	return randomItem([arch, god, ski])();
}
