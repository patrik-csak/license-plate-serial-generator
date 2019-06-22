import { bb26Random } from 'bb26'
import random from 'lodash.random'

import { randomNumericString } from '../../lib'

export default function montana (): string {
  // TODO: Weigh county choice by population
  const county = random(1, 56).toString()
  const numbers = randomNumericString(county.length === 1 ? 99999 : 9999)
  const letter = bb26Random('Z')

  return `${county}-${numbers}${letter}`
}
