import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function pennsylvania (): string {
  const letters = bb26Random('KLF', 'KTL')
  const numbers = randomNumericString(9999)

  return `${letters}-${numbers}`
}
