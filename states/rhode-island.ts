// Spec:
// - Format:
//   - `12345`
//   - `AB-12`, `AB-123`
// - Range:

import random from '../modules/random'
import Bb26 from '../modules/bb26'
import randomNumber from '../modules/random-number'

const alphaNumeric = (): string => {
    const letters: string = Bb26.randomString('aa', 'zz')
    const numbers: number = randomNumber(10, 999)

    return `${letters}-${numbers}`.toUpperCase()
}

const numeric = (): string => {
    return `${randomNumber(99999)}`
}

const rhodeIsland = (): string => {
    return random(alphaNumeric, numeric)()
}

export default rhodeIsland
