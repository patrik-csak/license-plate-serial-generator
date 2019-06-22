import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function california (): string {
  let serial = randomNumericString(6, 8)
  serial += bb26Random(
    serial === '6' ? 'TPW' : 'AAA',
    serial === '8' ? 'KPQ' : 'AAAA',
  )
  serial += randomNumericString(999)

  return serial
}
