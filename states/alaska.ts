// Spec, as of 2010-01-01:
// - Format: `ABC 123`
// - Ranges:
//   - `FUZ 100` to `FUZ 999`, or
//   - `GAA 199` to `GZZ 999`, or
//   - `KAA 100` to `KCP 999` (as of 2018-05-21)

import Bb26 from '../modules/bb26'
import weightedRandomElement from '../modules/weighted-random-element'
import randomNumericString from '../modules/random-numeric-string'

const alaska = (): string => {
    const letterRanges = [
        {
            value: {from: 'fuz', to: 'fuz'},
            weight: 999 - 100
        },
        {
            value: {from: 'gaa', to: 'gzz'},
            weight: (999 - 199) +
            (Bb26.toDecimal(Bb26.subtract('gzz', 'gab')) * 1000)
        },
        {
            value: {from: 'kaa', to: 'kcp'},
            weight: (999 - 100) +
            (Bb26.toDecimal(Bb26.subtract('kcp', 'kab')) * 1000)
        }
    ]

    const letterRange = weightedRandomElement(letterRanges)
    let letters: string
    let numbers: string

    if (letterRange.from === 'fuz') {
        letters = 'fuz'
        numbers = randomNumericString(100, 999)
    } else if (letterRange.from === 'gaa') {
        letters = Bb26.randomString(letterRange.from, letterRange.to)
        numbers = randomNumericString(letters === 'gaa' ? 199 : 1, 999)
    } else if (letterRange.from === 'kaa') {
        letters = Bb26.randomString(letterRange.from, letterRange.to)
        numbers = randomNumericString(letters === 'kaa' ? 100 : 1, 999)
    }

    return `${letters.toUpperCase()} ${numbers}`
}

export default alaska
