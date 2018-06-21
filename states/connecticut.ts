// Spec (as of 2018-05-04):
// - Format: `AB·12345`
// - Range:

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'
import interpunct from '../modules/interpunct';

const connecticut = (): string => {
    const letters: string = Bb26.randomString('aa', 'ap').toUpperCase()
    const numbers: string = randomNumericString(1, 30000)

    return letters + interpunct + numbers
}

export default connecticut
