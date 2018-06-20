// Spec:
// - Format: `ABC 123`, where `AB` is county code

import counties from './data/mississippi-counties'
import random from '../modules/random'
import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const mississippi = (): string => {
    // TODO: Weigh county choice by population
    const countyCodes = random(random(counties).codes)
    const letters: string = countyCodes + Bb26.randomString('z')
    const numbers: string = randomNumericString(999)

    return `${letters} ${numbers}`.toUpperCase()
}

export default mississippi
