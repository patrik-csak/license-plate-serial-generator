import { bb26Random } from 'bb26'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

export default function maryland (): string {
  const digit = sample([8, 9])
  const letters = bb26Random(
    digit === 8 ? 'CN' : 'AA',
    digit === 9 ? 'DW' : 'ZZ',
  )
  const digits = randomNumericString(
    0,
    digit + letters === '9DW' ? 2552 : 9999,
  )

  return digit + letters + digits
}
