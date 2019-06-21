import counties from './mississippi-counties'
import { Bb26, random, randomNumericString } from '../../lib'

const mississippi = (): string => {
  // TODO: Weigh county choice by population
  const countyCodes = random(random(counties).codes)
  const letters: string = countyCodes + Bb26.randomString('z')
  const numbers: string = randomNumericString(9999)

  return `${letters} ${numbers}`.toUpperCase()
}

export default mississippi
