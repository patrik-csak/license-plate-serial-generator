// Spec (as of 2018-02-20):
// - Format: `123 4AB`
// - Range: `000 0GA` to `999 9YE`
// - Progression of first letter: `G, H, I, J, B, P, Q, T, U, X, Y`

import randomNumericString from '../modules/random-numeric-string'
import random from '../modules/random'
import Bb26 from '../modules/bb26'

const florida = (): string => {
    const firstLetters = ['g', 'h', 'i', 'j', 'b', 'p', 'q', 't', 'u']
    const letters = `${random(firstLetters)}${Bb26.randomString('z')}`
        .toUpperCase()
    const numbers: string = `${randomNumericString(999)} ${randomNumericString(9)}`

    return numbers + letters
}

export default florida
