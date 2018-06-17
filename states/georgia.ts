// Spec (as of 2017-08-27):
// - Format: `ABC1234`
// - Range:
//   - `PAA0000` to `QAL9999`
//   - `CAR0000` to `CHC9999`

import randomElement from '../modules/random-element'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const georgia = (): string => {
    interface LetterRange {
        min: string
        max: string
    }

    const letterRanges: LetterRange[] = [
        {min: 'paa', max: 'qal'},
        {min: 'car', max: 'chc'}
    ]
    const letterRange: LetterRange = randomElement(letterRanges)
    const letters: string = Bb26
        .randomString(letterRange.min, letterRange.max)
        .toUpperCase()
    const numbers: string = randomNumericString(9999)

    return letters + numbers
}

export default georgia
