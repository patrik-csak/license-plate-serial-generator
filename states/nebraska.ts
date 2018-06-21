// Spec (as of 2018-03-05):
// - Formats:
//   - `ABC 123` for Douglas, Lancaster, and Sarpy counties
//   - `X-A1234`, `X-AB123`, `XX-A123`, or `XX-AB12`, for all other counties,
//     where `X`s are the county code
// - Ranges:
//   - Mid-'U' series to `VWT 999`

import numberRange from '../modules/number-range'
import random from '../modules/random'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const countyCoded = (county: number): string => {
    let serial: string = `${county}-${Bb26.randomString('zz')}`
    serial += randomNumericString(Math.pow(10, 7 - serial.length) - 1)

    return serial.toUpperCase()
}

const abc123 = (): string => {
    const letters: string = Bb26.randomString('uaa', 'vwt')
    const numbers: string = randomNumericString(999)

    return `${letters} ${numbers}`.toUpperCase()
}

const nebraska = (): string => {
    const counties: number[] = numberRange(1, 93)
    // TODO: Weigh county choice by population
    const county: number = random(counties)

    return [1, 2, 59].includes(county) ? abc123() : countyCoded(county)
}

export default nebraska
