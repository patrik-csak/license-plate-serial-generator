// Spec (as of 2018-07-09):
// - Format: `ABC-1234`
// - Range: `AAA-1001` to `ADJ-9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const wisconsin = (): string => {
    const letters: string = Bb26.randomString('aaa', 'adj')
    const numbers: string = randomNumericString(1001, 9999)

    return `${letters}-${numbers}`.toUpperCase()
}

export default wisconsin
