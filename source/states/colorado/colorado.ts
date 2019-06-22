import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function colorado (): string {
  const letters = bb26Random('AEWT', 'BFMZ')
  const numbers = randomNumericString(1, letters === 'bfmy' ? 21 : 99)

  return `${letters.slice(0, 3)}-${letters[3]}${numbers}`.toUpperCase()
}
