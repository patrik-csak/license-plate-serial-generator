import { bb26Range } from 'bb26'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

export default function newJersey (): string {
  let left = sample(bb26Range('D').filter(string => !/[IOQ]/.test(string)))
  left += randomNumericString(left === 'a' ? 10 : 0, left === 'c' ? 62 : 99)

  const right = sample(
    bb26Range(left === 'A10' ? 'EFF' : 'AAA', left === 'C62' ? 'LKB' : 'AAAA')
      .filter(string => !/[IOQ]/.test(string)),
  )

  return `${left}-${right}`
}
