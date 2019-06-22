import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function arkansas (): string {
  const letters: string = bb26Random('KPG', 'YGA')
  const numbers: string = randomNumericString(1, 999)

  return `${numbers} ${letters}`
}
