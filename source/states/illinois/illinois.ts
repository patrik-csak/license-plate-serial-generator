import { bb26Random } from 'bb26'
import { randomNumericString } from '../../lib'

export default function illinois (): string {
  const letters = bb26Random('AQ', 'BP')
  const numbers = randomNumericString(
    letters === 'AQ' ? 11001 : 0,
    letters === 'BP' ? 20703 : 99999,
  )

  return `${letters} ${numbers}`
}
