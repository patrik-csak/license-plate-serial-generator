import { bb26Random } from 'bb26'

import { interpunct, randomNumericString } from '../../lib'

export default function connecticut (): string {
  const letters = bb26Random('AA', 'AW')
  const numbers = randomNumericString(1, letters === 'AV' ? 42 : 99999, 5)

  return letters + interpunct + numbers
}
