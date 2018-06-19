// Spec (as of 2018-06-04):
// - Format: `ABC 1234`
// - Range: `DAA 0000` to `DWX 9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const michigan = (): string => {
    const letters: string = Bb26.randomString('daa', 'dwx')
    const numbers: string = randomNumericString(9999)

    return `${letters} ${numbers}`.toUpperCase()
}

export default michigan
