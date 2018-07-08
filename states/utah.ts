// Spec: (as of 2018-06):
// - Format:
//   - Arch: `A12 3BC`
//   - God: `1A2BC`
//   - Ski: `A12 3BC`
// - Range:
//   - Arch: `Z00 1AA` to `V99 9FB` (progressed backwards)
//   - God: `0A0AA` to `9A9VA`
//   - Ski: `A00 1AA` to `F99 9KP`

import random from '../modules/random'
import randomNumericString from '../modules/random-numeric-string'
import Bb26 from '../modules/bb26'

const arch = (): string => {
    const numbers: string = randomNumericString(1, 999)
    const left: string = Bb26.randomString('v', 'z') + numbers.slice(0, 2)
    const right: string = numbers.slice(2) + Bb26.randomString('aa', 'fb')

    return `${left} ${right}`.toUpperCase()
}

const god = (): string => {
    return (randomNumericString(9) + 'a' + randomNumericString(9)
        + Bb26.randomString('aa', 'va'))
        .toUpperCase()
}

const ski = (): string => {
    const numbers: string = randomNumericString(1, 999)
    const left: string = Bb26.randomString('f') + numbers.slice(0, 2)
    const right: string = numbers.slice(2) + Bb26.randomString('aa', 'kb')

    return `${left} ${right}`.toUpperCase()
}

const utah = (): string => {
    return random(arch, god, ski)()
}

export default utah
