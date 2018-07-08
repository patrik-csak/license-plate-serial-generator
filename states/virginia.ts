// Spec (as of 2018-05-11):
// - Format: `ABC-1234`
// - Range:
//   - `VAA-1000` to `VZZ-9999`
//   - `UZZ-1000` to `UTU-9999`

import random from '../modules/random'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const virginia = (): string => {
    interface Range {
        min: string
        max: string
    }

    const ranges: Range[] = [
        {min: 'vaa', max: 'vzz'},
        {min: 'uzz', max: 'utu'}
    ]
    const range = random(ranges)

    const letters: string = Bb26.randomString(range.min, range.max)
    const numbers: string = randomNumericString(
        letters === range.min ? 1000 : 0,
        9999
    )

    return `${letters}-${numbers}`.toUpperCase()
}

export default virginia
