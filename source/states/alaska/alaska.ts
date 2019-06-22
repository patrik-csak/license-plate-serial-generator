import { bb26Range } from 'bb26'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

export default function alaska (): string {
  const validLetters = ['FUZ']
    .concat(bb26Range('GAA', 'HAA'))
    .concat(bb26Range('KAA', 'KDZ'))
  const letters = sample(validLetters)
  const numbers = randomNumericString(100, 999)

  return `${letters} ${numbers}`
}
