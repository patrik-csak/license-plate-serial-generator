import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function texas (): string {
  const letters = bb26Random('BBB', 'KZR')
  const numbers = randomNumericString(1, 9999)

  return `${letters}-${numbers}`
}
