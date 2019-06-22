import { bb26Random } from 'bb26'
import range from 'lodash.range'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

/** @ignore */
export function countyCoded (county: number): string {
  const letters = `${county}-${bb26Random('ZZ')}`
  const digits = randomNumericString(Math.pow(10, 7 - letters.length) - 1)

  return letters + digits
}

/** @ignore */
export function abc123 (): string {
  const letters = bb26Random('UMA', 'WDH')
  const numbers = randomNumericString(999)

  return `${letters} ${numbers}`
}

export default function nebraska (): string {
  const counties = range(1, 93)
  // TODO: Weigh county choice by population
  const county = <number>sample(counties)

  return [1, 2, 59].includes(county) ? abc123() : countyCoded(county)
}
