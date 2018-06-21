// Spec (as of 2018-06-04):
// - Format: `123 4567`
// - Range: `100 0000` to `441 0000`

import randomNumericString from '../modules/random-numeric-string'

const newHampshire = (): string => {
    const numbers: string = randomNumericString(1000000, 4410000)

    return numbers.slice(0, 3) + ' ' + numbers.slice(3)
}

export default newHampshire
