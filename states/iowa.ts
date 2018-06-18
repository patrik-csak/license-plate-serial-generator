// Spec (as of 2018-06-03):
// - Format: `ABC 123`
// - Range: `GXV 000` to `HAH 057`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const iowa = (): string => {
    const letters: string = Bb26.randomString('gxv', 'hah')
    const min: number = 0
    const max: number = letters === 'hah' ? 57 : 999
    const numbers: string = randomNumericString(min, max, 3)

    return `${letters} ${numbers}`.toUpperCase()
}

export default iowa
