import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function oklahoma (): string {
  const letters = bb26Random('AAA', 'JRL')
  const numbers = randomNumericString(1, 999)

  return `${letters}-${numbers}`.toUpperCase()
}
