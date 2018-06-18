// Spec (as of 2018-06-04):
// - Format: `123 ABC`
// - Range: `901 JCB` to `999 YCV`

import Bb26 from '../modules/bb26'
import randomNumber from '../modules/random-number'

const kentucky = (): string => {
    const numbers: number = randomNumber(901, 999)
    const min: string = numbers === 901 ? 'jcb' : 'aaa'
    const max: string = numbers === 999 ? 'ycv' : 'zzz'
    const letters: string = Bb26.randomString(min, max)

    return `${numbers} ${letters}`.toUpperCase()
}

export default kentucky
