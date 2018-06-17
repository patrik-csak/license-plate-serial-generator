// Spec (as of 2018-05-15):
// - Format: `AB-1234`
// - Range: `FN-4000` to `FV-7999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const washingtonDc = (): string => {
    const letters: string = Bb26.randomString('fn', 'fv').toUpperCase()
    const min: number = letters === 'FN' ? 4000 : 0
    const max: number = letters === 'FV' ? 7999 : 9999
    const numbers = randomNumericString(min, max)

    return `${letters}-${numbers}`
}

export default washingtonDc
