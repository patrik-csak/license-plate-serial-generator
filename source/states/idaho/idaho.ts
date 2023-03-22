import arrayShuffle from 'array-shuffle';
import {random as randomBb26} from 'bb26';
import randomItem from 'random-item';
import {randomNumericString} from '../../lib/index.js';

/**
 * Generates random serial for [Idaho](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Idaho#1968_to_present)
 *
 * **Serial formats**, where `XX` is a county code:
 *
 * - `X 123456`
 * - `XX 12345`
 * - `XX A1234`
 * - `XX A1234`
 * - `XX AB123`
 * - `XX 1A234`
 * - `XX 1234A`
 * - `XX 123AB`
 * - `XXX 1234`
 * - `XXX A123`
 *
 * ```
 * import { idaho } from 'license-plate-serial-generator'
 *
 * idaho() // 'K 066648'
 * ```
 */
export default function idaho(): string {
	type County = {
		letter: string;
		count: number;
	};

	const counties: County[] = [
		{letter: 'A', count: 2},
		{letter: 'B', count: 10},
		{letter: 'C', count: 7},
		{letter: 'E', count: 1},
		{letter: 'F', count: 2},
		{letter: 'G', count: 2},
		{letter: 'I', count: 1},
		{letter: 'J', count: 2},
		{letter: 'K', count: 1},
		{letter: 'L', count: 4},
		{letter: 'M', count: 2},
		{letter: 'N', count: 1},
		{letter: 'O', count: 2},
		{letter: 'P', count: 2},
		{letter: 'S', count: 1},
		{letter: 'T', count: 2},
		{letter: 'V', count: 1},
		{letter: 'W', count: 1},
	];
	const countyCodes: string[] = [];
	let numbers: string;
	let right = '';

	for (const county of counties) {
		for (let i = 0; i < county.count; i++) {
			const number = county.count > 1 ? `${i + 1}` : '';

			countyCodes.push(number + county.letter);
		}
	}

	const countyCode = randomItem(countyCodes);

	switch (countyCode.length) {
		case 1: {
			// There's only one county character, so the format must be
			// `A 123456`

			right = randomNumericString(999_999);

			break;
		}

		case 2: {
			// There are two county characters, so the format can be
			// `0A 12345`, `0A A1234`, `0A AB123`, `0A 1A234`, `0A 1234A`, or
			// `0A 123AB`

			numbers = randomNumericString(randomItem([999, 9999, 99_999]));

			switch (numbers.length) {
				case 3: {
					const letters = randomBb26('ZZ');
					numbers = randomNumericString(999);

					right =
						letters.length === 1
							? randomNumericString(9) + letters + numbers
							: arrayShuffle([letters, numbers]).join('');

					break;
				}

				case 4: {
					const letter = randomBb26('Z');
					numbers = randomNumericString(9999);

					right = arrayShuffle([letter, numbers]).join('');

					break;
				}

				case 5: {
					right = numbers;

					break;
				}
				// No default
			}

			break;
		}

		case 3: {
			// There are three county characters, so the format can be
			// `CCC 1234` or `CCC A123`

			numbers = randomNumericString(randomItem([999, 9999]));

			right = numbers.length === 3 ? randomBb26('Z') + numbers : numbers;

			break;
		}
		// No default
	}

	return `${countyCode} ${right}`;
}
