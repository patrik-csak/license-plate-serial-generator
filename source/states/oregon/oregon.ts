import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function oregon (): string {
  const letters = bb26Random('BAA', 'KUH')
  const numbers = randomNumericString(1, 999)

  return `${numbers} ${letters}`
}
