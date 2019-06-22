import sample from 'lodash.sample'

import counties, { County } from './mississippi-counties'
import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function mississippi (): string {
  // TODO: Weigh county choice by population
  const county = <string>sample((<County>sample(counties)).codes)
  const letters = county + bb26Random('Z')
  const numbers = randomNumericString(9999)

  return `${letters} ${numbers}`
}
