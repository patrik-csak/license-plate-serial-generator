// Spec (as of 2018-05-11):
// - Format: `ABC-1234`
// - Range: `PAA-1001` to `PKZ-9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const northCarolina = (): string => {
    const letters: string = Bb26.randomString('paa', 'pkz')
    const numbers: string = randomNumericString(
        letters === 'aaa' ? 1001 : 0,
        999
    )

    return `${letters}-${numbers}`.toUpperCase()
}

export default northCarolina
