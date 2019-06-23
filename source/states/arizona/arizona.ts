import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

/**
 * Generates random serial for [Arizona](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Arizona#1956_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `AAA00001` to `CPD0898`
 *
 * ```
 * import { arizona } from 'license-plate-serial-generator'
 *
 * arizona() // 'AUT8173'
 * ```
 */
export default function arizona (): string {
  const letters = bb26Random('AAA', 'CNY')
  const numbers = randomNumericString(1, letters === 'CNX' ? 1511 : 9999)

  return letters.toUpperCase() + numbers
}
