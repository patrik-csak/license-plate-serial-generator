// Spec:
// - Format: `ABC-123`
// - Range: `AAA-001` to `BER-999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const minnesota = (): string => {
    const letters: string = Bb26.randomString('aaa', 'ber')
    const numbers: string = randomNumericString(1, 999)

    return `${letters}-${numbers}`.toUpperCase()
}

export default minnesota
