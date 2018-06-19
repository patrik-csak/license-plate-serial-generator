// Spec:
// - Formats:
//   - `1AB 234`
//   - ``ABC 23`
// - Ranges:
//   - `1AA 100` to `9ZZ 999`
//   - `1AAA 10` to `9ZZZ 99`
// - Letters `I`, `O`, `Q`, and `U` not used

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'
import randomNumber from '../modules/random-number'
import weightedRandomElement from '../modules/weighted-random-element'

const massachusetts = (): string => {
    const randomLetter = (): string => {
        interface LetterRange {
            min: string
            max: string,
        }

        const letterRanges: LetterRange[] = [
            {min: 'a', max: 'h'},
            {min: 'j', max: 'n'},
            {min: 'p', max: 'p'},
            {min: 'r', max: 't'},
            {min: 'v', max: 'z'},
        ]
        const weightedLetterRanges = letterRanges.map(range => {
            return {
                value: range,
                weight: range.max.charCodeAt(0) - range.min.charCodeAt(0) + 1
            }
        })
        const letterRange = weightedRandomElement(weightedLetterRanges)

        return Bb26.randomString(letterRange.min, letterRange.max)
    }
    const lettersLength: number = randomNumber(2, 3)
    let letters: string = ''
    const numbers: string = randomNumericString(
        lettersLength === 2 ? 100 : 10,
        lettersLength === 2 ? 999 : 99
    )

    for (let i = 0; i < lettersLength; i++) letters += randomLetter()

    return `1${letters} ${numbers}`.toUpperCase()
}

export default massachusetts
