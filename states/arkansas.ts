// Spec, as of 2018-04-30:
// - Format: `123 ABC`
// - Range: `001 KPG` to `999 XNZ`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const arkansas = (): string => {
    const letters: string = Bb26.randomString('kpt', 'xnz').toUpperCase()
    const numbers: string = randomNumericString(1, 999)

    return `${numbers} ${letters}`
}

export default arkansas
