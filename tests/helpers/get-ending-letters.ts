import getFirstMatchingPattern from './get-first-matching-pattern.js';

export default function getEndingLetters(string: string) {
	return getFirstMatchingPattern(string, /[A-Z]+$/);
}
