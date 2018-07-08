// Spec (as of 2018-06-30):
// - Range: `ABC 123`
// - Format: `BNG 100` to `HGR 999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const vermont = (): string => {
    const letters: string = Bb26.randomString('bng', 'hgr')
    const numbers: string = randomNumericString(
        letters === 'bng' ? 100 : 0,
        999
    )

    return `${letters} ${numbers}`.toUpperCase()
}

export default vermont
