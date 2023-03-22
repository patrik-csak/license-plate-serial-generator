import getFirstMatchingPattern from './get-first-matching-pattern.js';

export default function getBeginningLetters(string: string) {
	return getFirstMatchingPattern(string, /^[A-Z]+/);
}
