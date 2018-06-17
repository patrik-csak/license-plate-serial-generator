import randomNumber from './random-number'

function randomNumericString(max: number): string
function randomNumericString(min: number, max: number): string

function randomNumericString(a: number, b?: number): string {
    const min: number = b ? a : 0
    const max: number = b || a
    const number = randomNumber(min, max)

    return String(number).padStart(Math.floor(Math.log10(max)) + 1, '0')
}

export default randomNumericString
