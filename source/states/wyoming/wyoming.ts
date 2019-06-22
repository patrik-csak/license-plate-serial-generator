import range from 'lodash.range'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

export default function wyoming (): string {
  // TODO: Weigh county choice based on population
  const county = sample(range(1, 23).concat(99))
  const digits = randomNumericString(99999)

  return `${county}-${digits}`
}
