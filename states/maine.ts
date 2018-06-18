// Spec (as of 2018-06-04):
// - Format: `1234 AB`
// - Range: `1 GA` to `9999 WS`

import Bb26 from '../modules/bb26'
import randomNumber from '../modules/random-number'

const maine = (): string => {
    const letters: string = Bb26.randomString('ga', 'ws')
    const number: number = randomNumber(9999)

    return `${number} ${letters}`.toUpperCase()
}

export default maine
