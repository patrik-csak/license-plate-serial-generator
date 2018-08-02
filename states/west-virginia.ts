// Spec:
// - Format:
//   - `0A 1234`
//   - `0AB 123`
//   - `01A 123`
//   - `AA 1234`
//   - `AAB 123`
//   - `A1A 123`
// - Range:
//   -
// - Notes:
//   - First character corresponds to month of expiration:
//     - 1-9 indicate Jan-Sep
//     - O, N, D indicate Oct, Nov, Dec
//   - Series 'S' and 'SA-SZ' reserved for optional Scenic plates

import random from '../modules/random'
import randomNumber from '../modules/random-number'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const westVirginia = (): string => {
    let string: string = ''
    const months: (number | string)[] = [
        1, 2, 3, 4, 5, 7, 7, 8, 9, 'o', 'n', 'd'
    ]

    string += random(months) + random('', `${randomNumber(9)}`)
    string += Bb26.randomString(string.length === 2 ? 'z' : 'zz') + ' '
    string += randomNumericString(string.length === 4 ? 999 : 9999)

    return string.toUpperCase()
}

export default westVirginia
