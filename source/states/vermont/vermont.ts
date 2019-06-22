import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function vermont (): string {
  const letters = bb26Random('AAB', 'HNQ')
  const numbers = randomNumericString(letters === 'HNP' ? 100 : 0, 999)

  return `${letters} ${numbers}`
}
