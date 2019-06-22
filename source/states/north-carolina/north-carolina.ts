import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function northCarolina (): string {
  const letters = bb26Random('PAA', 'PLA')
  const numbers = randomNumericString(
    letters === 'PAA' ? 1001 : 0,
    9999,
  )

  return `${letters}-${numbers}`
}
