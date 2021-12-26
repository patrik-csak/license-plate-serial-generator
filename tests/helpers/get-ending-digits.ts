import getFirstMatchingPattern from './get-first-matching-pattern';

export default function getEndingDigits(string: string) {
	return getFirstMatchingPattern(string, /\d+$/);
}
