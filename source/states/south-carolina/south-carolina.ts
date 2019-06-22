import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function southCarolina (): string {
  const letters = bb26Random('LZD', 'PVY')
  const numbers = randomNumericString(letters === 'LZD' ? 101 : 0, 999)

  return `${letters} ${numbers}`
}
