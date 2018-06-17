// Spec (as of 2018-05-04):
// - Format: `AB·12345`
// - Range:

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const connecticut = (): string => {
    const interpunct = String.fromCharCode(0x00B7)
    const letters: string = Bb26.randomString('aa', 'ap').toUpperCase()
    const numbers: string = randomNumericString(1, 30000)

    return letters + interpunct + numbers
}

export default connecticut
