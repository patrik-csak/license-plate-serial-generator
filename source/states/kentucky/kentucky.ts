import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function kentucky (): string {
  const letters = bb26Random('JCB', 'ZJL')
  const numbers = randomNumericString(
    letters === 'JCB' ? 901 : 0,
    letters === 'ZJK' ? 253 : 999,
  )

  return `${numbers} ${letters}`
}
