import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function washington (): string {
  const letters = bb26Random('AAA', 'BKU')
  const digits = randomNumericString(9999)

  return letters + digits
}
