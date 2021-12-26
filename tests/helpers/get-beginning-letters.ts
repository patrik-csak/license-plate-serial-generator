import getFirstMatchingPattern from './get-first-matching-pattern';

export default function getBeginningLetters(string: string) {
	return getFirstMatchingPattern(string, /^[A-Z]+/);
}
