import randomNumber from './random-number'
import base26ToDecimal from './base-26-to-decimal'
import decimalToBase26 from './decimal-to-base-26'

function randomAlphabeticString(from: string, to: string): string
function randomAlphabeticString(to: string): string

function randomAlphabeticString(a: string, b?: string): string {
    const from: number = b
        ? base26ToDecimal(a)
        : base26ToDecimal('a')
    const to: number = b
        ? base26ToDecimal(b)
        : base26ToDecimal(a)
    const number: number = randomNumber(from, to)

    return decimalToBase26(number)
}

export default randomAlphabeticString
