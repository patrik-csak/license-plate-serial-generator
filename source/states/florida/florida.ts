import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function florida (): string {
  let digits = randomNumericString(890)
  let left = 'Z'
  let right = ''

  left += digits.slice(0, 2)
  right += digits[2]
  right += bb26Random('AA', digits === '890' ? 'FY' : 'AAA')

  return `${left} ${right}`
}
