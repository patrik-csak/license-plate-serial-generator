import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function wisconsin (): string {
  const letters = bb26Random('AAA', 'AFR')
  const numbers = randomNumericString(
    letters === 'AAA' ? 1001 : 0,
    letters === 'AFR' ? 2743 : 9999,
  )

  return `${letters}-${numbers}`.toUpperCase()
}
