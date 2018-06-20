// Spec:
// - Format: `1-12345A` or `10-1234A`, where left half is county code

import Bb26 from '../modules/bb26'
import randomNumber from '../modules/random-number'
import randomNumericString from '../modules/random-numeric-string'

const montana = (): string => {
    // TODO: Weigh county choice by population
    const county: string = `${randomNumber(1, 56)}`
    const numbers: string = randomNumericString(
        county.length === 1 ? 99999 : 9999
    )
    const letter: string = Bb26.randomString('z')

    return `${county}-${numbers}${letter}`.toUpperCase()
}

export default montana
