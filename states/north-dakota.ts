// Spec (as of 2018-06-04):
// - Format: `123 ABC`
// - Range: `000 BTG` to `999 CEM`

import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'

const northDakota = (): string => {
    const numbers: string = randomNumericString(999)
    const letters: string = Bb26.randomString(
        numbers === '000' ? 'btg' : 'aaa',
        numbers === '999' ? 'cem' : 'zzz'
    )

    return `${numbers} ${letters}`.toUpperCase()
}

export default northDakota
