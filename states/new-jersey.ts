// Spec (as of 2018-06-21):
// - Format: `A12-BCD`
// - Range: `A10-EFF` to `N19-KEW`
// - `I`, `O`, `Q` not used in any position

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'
import random from '../modules/random'

const newJersey = (): string => {
    const bannedLetters = ['i', 'o', 'q']
    let serial: string = ''
    serial += random(Bb26.range({end: 'o', exclude: bannedLetters}))
    serial += randomNumericString(
        serial === 'a' ? 10 : 0,
        serial === 'n' ? 19 : 99
    )
    serial += '-'
    serial += random(Bb26.range({
        start: serial === 'a10-' ? 'e' : 'a',
        end: serial === 'n19-' ? 'l' : 'z',
        exclude: bannedLetters
    }))
    serial += random(Bb26.range({
        start: serial === 'a10-e' ? 'f' : 'a',
        end: serial === 'n19-k' ? 'd' : 'z',
        exclude: bannedLetters
    }))
    serial += random(Bb26.range({
        start: serial === 'a10-ef' ? 'f' : 'a',
        end: serial === 'n19-ke' ? 'x' : 'z',
        exclude: bannedLetters
    }))

    return serial.toUpperCase()
}

export default newJersey
