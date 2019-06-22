import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function arizona (): string {
  const letters = bb26Random('AAA', 'CNY')
  const numbers = randomNumericString(1, letters === 'CNX' ? 1511 : 9999)

  return letters.toUpperCase() + numbers
}
