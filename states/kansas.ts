// Spec (as of 2018-06-04):
// - Format: `123 ABC`
// - Range: `000 AAA` to `999 LEK`

import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'

const kansas = (): string => {
    const letters: string = Bb26.randomString('aaa', 'lek')
    const numbers: string = randomNumericString(999)

    return `${numbers} ${letters}`.toUpperCase()
}

export default kansas
