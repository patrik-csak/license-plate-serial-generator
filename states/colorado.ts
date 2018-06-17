// Spec (mid 2015-present):
// - Format: `ABC-123`
// - Range:

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const colorado = (): string => {
    const letters: string = Bb26.randomString('zzz').toUpperCase()
    const numbers: string = randomNumericString(1, 999)

    return `${letters}-${numbers}`
}

export default colorado
