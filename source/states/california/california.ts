import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/**
 * Generates random serial for [California](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_California#1963_to_present)
 *
 * **Serial format**: `1ABC123`
 *
 * **Serial range**: `6TPW000` to `8LAA459`
 *
 * ```
 * import { california } from 'license-plate-serial-generator'
 *
 * california() // '6WNT059'
 * ```
 */
export default function california (): string {
  let serial = randomNumericString(6, 8)
  serial += bb26Random(
    serial === '6' ? 'TPW' : 'AAA',
    serial === '8' ? 'KPQ' : 'AAAA',
  )
  serial += randomNumericString(999)

  return serial
}
