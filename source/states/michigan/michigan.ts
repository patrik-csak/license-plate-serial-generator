import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function michigan (): string {
  const letters = bb26Random('DAA', 'ECR')
  const numbers = randomNumericString(9999)

  return `${letters} ${numbers}`
}
