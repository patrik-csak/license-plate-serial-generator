// Spec:
// - Formats:
//   - `1-12345`
//   - `11-12345`
// - First digit/digits county code

import randomNumber from '../modules/random-number'
import randomNumericString from '../modules/random-numeric-string'

const wyoming = (): string => {
    // TODO: Weigh county choice based on population
    const county: number = randomNumber(1, 23)
    const digits = randomNumericString(99999)

    return `${county}-${digits}`.toUpperCase()
}

export default wyoming
