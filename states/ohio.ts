// Spec (as of 2018-06-18):
// - Format: `ABC 1234`
// - Range: `FWA 1000` to `HME 9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const ohio = (): string => {
    const letters: string = Bb26.randomString('fwa', 'hme')
    const numbers: string = randomNumericString(
        letters === 'fwa' ? 1000 : 0,
        9999
    )

    return `${letters} ${numbers}`.toUpperCase()
}

export default ohio
