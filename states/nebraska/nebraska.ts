import { Bb26, numberRange, random, randomNumericString } from '../../lib'

const countyCoded = (county: number): string => {
  let serial: string = `${county}-${Bb26.randomString('zz')}`
  serial += randomNumericString(Math.pow(10, 7 - serial.length) - 1)

  return serial.toUpperCase()
}

const abc123 = (): string => {
  const letters: string = Bb26.randomString('uma', 'wdh')
  const numbers: string = randomNumericString(999)

  return `${letters} ${numbers}`.toUpperCase()
}

const nebraska = (): string => {
  const counties: number[] = numberRange(1, 93)
  // TODO: Weigh county choice by population
  const county: number = random(counties)

  return [1, 2, 59].includes(county) ? abc123() : countyCoded(county)
}

export { abc123, countyCoded }
export default nebraska
