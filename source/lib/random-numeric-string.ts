import random from 'lodash.random';

function randomNumericString(upper: number): string;
function randomNumericString(lower: number, upper: number): string;
function randomNumericString(
	lower: number,
	upper: number,
	length: number
): string;

/** @ignore */
function randomNumericString(
	lower: number,
	upper?: number,
	length?: number
): string {
	const _lower = upper ? lower : 0;
	const _upper = upper || lower;
	const number = random(_lower, _upper);
	length = length || `${_upper}`.length;

	return `${number}`.padStart(length, '0');
}

export default randomNumericString;
