// Spec (as of 2018-06-30):
// Format: `ABC-1234`
// Range: `KLF-0000 to KTL-9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const pennsylvania = (): string => {
    const letters: string = Bb26.randomString('klf', 'ktl')
    const numbers: string = randomNumericString(9999)

    return `${letters}-${numbers}`.toUpperCase()
}

export default pennsylvania
