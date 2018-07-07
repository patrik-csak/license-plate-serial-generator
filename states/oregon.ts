// Spec (as of 2018-06-04):
// - Format: `123 ABC`
// - Range: `001 BAA` to `999 KUH`

import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'

const oregon = (): string => {
    const letters: string = Bb26.randomString('baa', 'kuh')
    const numbers: string = randomNumericString(1, 999)

    return `${numbers} ${letters}`.toUpperCase()
}

export default oregon
