// Spec:
// - Format: `1A1 234` or `10A 123`, where the first `1/1A` is the county
//   code of issuance

import randomNumber from '../modules/random-number'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const southDakota = (): string => {
    const county: number = randomNumber(1, 67)
    const right: string = randomNumericString(999)
    let left: string = `${county}`

    left += Bb26.randomString('z')
    if (left.length === 2) left += randomNumber(9)

    return `${left} ${right}`.toUpperCase()
}

export default southDakota
