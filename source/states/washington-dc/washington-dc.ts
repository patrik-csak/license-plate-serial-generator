import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function washingtonDc (): string {
  const letters = bb26Random('FN', 'GB')
  const numbers = randomNumericString(
    letters === 'FN' ? 4000 : 0,
    letters === 'GB' ? 4718 : 9999,
  )

  return `${letters}-${numbers}`
}
