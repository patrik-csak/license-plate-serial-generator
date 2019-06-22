import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function indiana (): string {
  const letters: string = bb26Random('ZZZ')
  const numbers: string = randomNumericString(999)

  return `${numbers}${letters}`
}
