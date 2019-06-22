import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function northDakota (): string {
  const digits = randomNumericString(825)
  const letters = bb26Random(
    digits === '000' ? 'BTR' : 'AAA',
    digits === '825' ? 'CNL' : 'ZZZ',
  )

  return `${digits} ${letters}`
}
