// Spec (as of 2017):
// - Format:
//   - `123A`
//   - `123AB`
//   - `123ABC`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const indiana = (): string => {
    const letters: string = Bb26.randomString('zzz')
    const numbers: string = randomNumericString(999)

    return `${numbers}${letters}`.toUpperCase()
}

export default indiana
