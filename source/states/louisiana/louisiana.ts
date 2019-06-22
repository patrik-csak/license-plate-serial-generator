import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function louisiana (): string {
  const numbers = randomNumericString(999)
  const letters = bb26Random('AAA', numbers === '999' ? 'DEV' : 'ZZZ')

  return `${numbers} ${letters}`
}
