import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function alabama (): string {
  // TODO: Weigh county code choice based on population
  const county = randomNumericString(1, 67)
  const letters = bb26Random('AA', 'ZZ')
  const digits = randomNumericString(county.length === 2 ? 9999 : 999)

  return county + letters + digits
}
