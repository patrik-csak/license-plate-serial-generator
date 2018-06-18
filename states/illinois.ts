// Spec (as of 2018-05-31):
// - Format: `AB 12345`
// - Range: `AG 11001` to `AW 42118`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const illinois = (): string => {
    const letters: string = Bb26.randomString('ag', 'aw')
    const min: number = letters === 'ag' ? 11001 : 0
    const max: number = letters === 'aw' ? 42118 : 99999
    const numbers: string = randomNumericString(min, max)

    return `${letters} ${numbers}`.toUpperCase()
}

export default illinois
