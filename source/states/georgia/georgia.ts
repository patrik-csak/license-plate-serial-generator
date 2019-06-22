import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function georgia (): string {
  const letters: string = bb26Random('PFA', 'PMA')
  const digits: string = randomNumericString(9999)

  return letters + digits
}
