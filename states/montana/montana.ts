import { Bb26, randomNumber, randomNumericString } from '../../modules'

const montana = (): string => {
  // TODO: Weigh county choice by population
  const county: string = `${randomNumber(1, 56)}`
  const numbers: string = randomNumericString(
    county.length === 1 ? 99999 : 9999,
  )
  const letter: string = Bb26.randomString('z')

  return `${county}-${numbers}${letter}`.toUpperCase()
}

export default montana
