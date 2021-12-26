import getFirstMatchingPattern from './get-first-matching-pattern';

export default function getBeginningDigits(string: string) {
	return getFirstMatchingPattern(string, /^\d+/);
}
