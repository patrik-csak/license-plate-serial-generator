import randomNumber from './random-number'

function randomNumericString(max: number): string
function randomNumericString(min: number, max: number): string
function randomNumericString(min: number, max: number, length: number): string

function randomNumericString(a: number, b?: number, length?: number): string {
    const min: number = b ? a : 0
    const max: number = b || a
    const number = randomNumber(min, max)
    length = length || Math.floor(Math.log10(max)) + 1

    return String(number).padStart(length, '0')
}

export default randomNumericString
