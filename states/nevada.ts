// Spec (as of 2018-06-04):
// - Format: `123·A45`
// - Range: `001·A00` to `999·E49`

import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'
import interpunct from '../modules/interpunct'

const nevada = (): string => {
    const left: string = randomNumericString(1, 999)
    const letter: string = Bb26.randomString('e')
    const right: string = randomNumericString(letter === 'e' ? 49 : 99)

    return (left + interpunct + letter + right).toUpperCase()
}

export default nevada
