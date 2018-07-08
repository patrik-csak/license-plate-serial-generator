// Spec (as of 2018-06-22):
// - Format: `ABC 123`
// - Range: `LZD 101` to `PVY 999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const southCarolina = (): string => {
    const letters: string = Bb26.randomString('lzd', 'pvy')
    const numbers: string = randomNumericString(
        letters === 'lzd' ? 101 : 0,
        999
    )

    return `${letters} ${numbers}`.toUpperCase()
}

export default southCarolina
