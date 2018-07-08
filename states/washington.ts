// Spec (as of 2018-06-30):
// - Format: `ABC1234`
// - Range: `AAA0000` to `BKU9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const washington = (): string => {
    const letters: string = Bb26.randomString('aaa', 'bku')
    const numbers: string = randomNumericString(9999)

    return letters.toUpperCase() + numbers
}

export default washington
