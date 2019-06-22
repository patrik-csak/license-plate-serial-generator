import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function kansas (): string {
  const letters: string = bb26Random('AAA', 'MBF')
  const numbers: string = randomNumericString(999)

  return `${numbers} ${letters}`.toUpperCase()
}
