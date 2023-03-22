import getFirstMatchingPattern from './get-first-matching-pattern.js';

export default function getEndingDigits(string: string) {
	return getFirstMatchingPattern(string, /\d+$/);
}
