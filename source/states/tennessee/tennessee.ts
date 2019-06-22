import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function tennessee (): string {
  const letters = bb26Random('BBB', 'BTG')
  const numbers = randomNumericString(1, 999)

  return `${letters}-${numbers}`
}
