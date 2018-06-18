// Spec (as of 2018-06-04):
// - Format: `123 ABC`
// - Range: `000 AAA` to `999 CMS`

import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'

const louisiana = (): string => {
    const numbers: string = randomNumericString(999)
    const max: string = +numbers === 999 ? 'cms' : 'zzz'
    const letters = Bb26.randomString(max)

    return `${numbers} ${letters}`.toUpperCase()
}

export default louisiana
