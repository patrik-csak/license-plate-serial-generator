// Spec (as of 2018-06-04):
// - Format: `123-ABC`
// - Range: `001-MAA` to `999-WJT`

import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'

const newMexico = (): string => {
    const numbers: string = randomNumericString(1, 999)
    const letters: string = Bb26.randomString(
        numbers === '001' ? 'maa' : 'aaa',
        numbers === '999' ? 'wjt' : 'zzz'
    )

    return `${numbers}-${letters}`.toUpperCase()
}

export default newMexico
