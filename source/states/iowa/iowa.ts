import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function iowa (): string {
  const letters = bb26Random('GXV', 'IBC')
  const lower = 0
  const upper = letters === 'hah' ? 57 : 999
  const numbers = randomNumericString(lower, upper, 3)

  return `${letters} ${numbers}`
}
