import random from 'lodash.random'
import range from 'lodash.range'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function southDakota (): string {
  const county = sample(range(1, 66).concat(67))
  const right = randomNumericString(999)
  let left = `${county}`

  left += bb26Random('Z')

  if (left.length === 2) left += random(9)

  return `${left} ${right}`
}
