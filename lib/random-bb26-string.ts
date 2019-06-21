// Random bijective base-26 string

import randomNumber from './random-number'
import bb26ToDecimal from './bb26-to-decimal'
import decimalToBb26 from './decimal-to-bb26'

function randomBb26String(max: string): string
function randomBb26String(min: string, max: string): string

function randomBb26String(a: string, b?: string): string {
    const min: number = b ? bb26ToDecimal(a) : bb26ToDecimal('a')
    const max: number = b ? bb26ToDecimal(b) : bb26ToDecimal(a)
    const number: number = randomNumber(min, max)

    return decimalToBb26(number)
}

export default randomBb26String
