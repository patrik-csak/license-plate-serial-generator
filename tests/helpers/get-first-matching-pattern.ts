export default function getFirstMatchingPattern(
	string: string,
	pattern: RegExp,
): string {
	const match = string.match(pattern);

	return match ? match[0] : '';
}
