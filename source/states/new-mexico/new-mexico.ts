import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function newMexico (): string {
  const digits = randomNumericString(1, 999)
  const letters = bb26Random(
    digits === '001' ? 'MAA' : 'AAA',
    digits === '999' ? 'WJT' : 'ZZZ',
  )

  return `${digits}-${letters}`
}
