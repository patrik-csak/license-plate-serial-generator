// Spec (as of 2008-06-16):
// - Format: `XA1 B2C`, where `X` corresponds to month of expiration
// - Letters `I`, `O`, and `Q` not used

import random from '../modules/random'
import Bb26 from '../modules/bb26'
import randomNumber from '../modules/random-number'

const missouri = (): string => {
    interface Month {
        codes: string[]
        month: number
    }

    const randomLetter = (): string => {
        const validLetters: string[] = Bb26.range('i')
            .concat(Bb26.range('j', 'o'))
            .concat(['p'])
            .concat(Bb26.range('r', 'aa'))

        return random(validLetters)
    }

    const months: Month[] = [
        {codes: ['a', 'b'], month: 0},
        {codes: ['c'], month: 1},
        {codes: ['d', 'e'], month: 2},
        {codes: ['f', 'g'], month: 3},
        {codes: ['h', 'j'], month: 4},
        {codes: ['k', 'l'], month: 5},
        {codes: ['m', 'n'], month: 6},
        {codes: ['p', 'r'], month: 7},
        {codes: ['s', 't'], month: 8},
        {codes: ['u', 'v'], month: 9},
        {codes: ['w', 'x'], month: 10},
        {codes: ['y', 'z'], month: 11},
    ]
    const monthLetter: string = random(random(months).codes)
    const letter2: string = randomLetter()
    const number1: string = `${randomNumber(9)}`
    const letter3: string = randomLetter()
    const number2: string = `${randomNumber(9)}`
    const letter4: string = randomLetter()

    const left: string = monthLetter + letter2 + number1
    const right: string = letter3 + number2 + letter4

    return `${left} ${right}`.toUpperCase()
}

export default missouri
