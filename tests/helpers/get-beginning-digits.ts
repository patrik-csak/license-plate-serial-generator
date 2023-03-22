import getFirstMatchingPattern from './get-first-matching-pattern.js';

export default function getBeginningDigits(string: string) {
	return getFirstMatchingPattern(string, /^\d+/);
}
