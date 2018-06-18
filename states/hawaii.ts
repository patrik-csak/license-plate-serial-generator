// See county algorithms for specs

import random from '../modules/random'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

interface County {
    (): string
}

// Hawaii county format: `HAB 123` or `ZAB 123`
const hawaiiCounty = (): string => {
    const county: string = random(['h', 'z'])
    const letters = Bb26.randomString('aa', 'zz')
    const numbers = randomNumericString(999)

    return `${county}${letters} ${numbers}`.toUpperCase()
}

// Honolulu county format:
// - Format: `[A-G,J,N,P,R-Y]BC 123`
// - Sequence may not include `H`, `K`, `L`, `M`, or `Z` in any position
const honoluluCounty = (): string => {
    interface LetterRange {
        min: string
        max: string
    }

    const countyLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
        'j', ' n', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']
    const letterRanges: LetterRange[] = [
        {min: 'a', max: 'g'},
        {min: 'i', max: 'j'},
        {min: 'n', max: 'y'},
    ]
    const letter2Range = random(letterRanges)
    const letter3Range = random(letterRanges)
    let letters: string = ''
    const numbers: string = randomNumericString(999)

    letters += random(countyLetters)
    letters += Bb26.randomString(letter2Range.min, letter2Range.max)
    letters += Bb26.randomString(letter3Range.min, letter3Range.max)

    return `${letters} ${numbers}`.toUpperCase()
}

// Kauai county format: `KAB 123`
const kauaiCounty = (): string => {
    const letters = Bb26.randomString('aa', 'zz')
    const numbers = randomNumericString(999)

    return `K${letters} ${numbers}`.toUpperCase()
}

// Maui county format: `MAB 123` or `LAB 123`
const mauiCounty = (): string => {
    const county: string = random(['m', 'l'])
    const letters = Bb26.randomString('aa', 'zz')
    const numbers = randomNumericString(999)

    return `${county}${letters} ${numbers}`.toUpperCase()
}

const hawaii = (): string => {
    const counties: County[] = [
        hawaiiCounty,
        honoluluCounty,
        kauaiCounty,
        mauiCounty
    ]

    // TODO: Weigh county choice based on population
    return random(counties)()
}

export default hawaii
