import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function ohio (): string {
  const letters = bb26Random('FWA', 'HME')
  const numbers = randomNumericString(
    letters === 'FWA' ? 1000 : 0,
    9999,
  )

  return `${letters} ${numbers}`
}
