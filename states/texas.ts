// Spec (2018-06-24):
// - Format: `ABC-1234`
// - Range: `BBB-0001` to `KZR-9999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const texas = (): string => {
    const letters: string = Bb26.randomString('bbb', 'kzr')
    const numbers: string = randomNumericString(1, 9999)

    return `${letters}-${numbers}`.toUpperCase()
}

export default texas
