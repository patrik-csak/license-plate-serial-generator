import { bb26Random } from 'bb26'

import { interpunct, randomNumericString } from '../../lib'

export default function nevada () {
  const left = randomNumericString(1, 999)
  const letter = bb26Random('E')
  const right = randomNumericString(letter === 'e' ? 49 : 99)

  return left + interpunct + letter + right
}
