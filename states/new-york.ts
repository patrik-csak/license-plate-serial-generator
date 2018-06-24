// Spec (as of 2018-06-08):
// - Format: `ABC-1234`
// - Range: `FAA-1000` to `JCT-9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const newYork = (): string => {
    const letters: string = Bb26.randomString('faa', 'jct')
    const numbers: string = randomNumericString(
        letters === 'faa' ? 1000 : 0,
        9999
    )

    return `${letters}-${numbers}`.toUpperCase()
}

export default newYork
