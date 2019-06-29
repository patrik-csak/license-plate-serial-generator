import random from 'lodash.random'
import range from 'lodash.range'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/**
 * Generates random serial for [South Dakota](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_South_Dakota#1976_to_present)
 *
 * **Serial formats**:
 *
 * - `1A1 234`
 * - `1AB 123`
 * - `10A 123`
 * - First `1`/`10` is county code of issuance (1-67, excluding 66)
 *
 * ```
 * import { southDakota } from 'license-plate-serial-generator'
 *
 * southDakota() // '11K 222'
 * ```
 */
export default function southDakota (): string {
  const county = sample(range(1, 66).concat(67))
  const right = randomNumericString(999)
  let left = `${county}`

  left += bb26Random('Z')

  if (left.length === 2) left += random(9)

  return `${left} ${right}`
}
