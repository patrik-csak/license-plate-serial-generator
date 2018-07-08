// Spec (as of 2018-03-05):
// - Format: `ABC-123`
// - Range: `BBB-001` to `BTG-999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const tennessee = (): string => {
    const letters: string = Bb26.randomString('bbb', 'btg')
    const numbers: string = randomNumericString(1, 999)

    return `${letters}-${numbers}`.toUpperCase()
}

export default tennessee
