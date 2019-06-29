import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/**
 * Generates random serial for [Washington](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Washington_(state)#1950_to_present)
 *
 * **Serial format**: `ABC1234`
 *
 * **Serial range**: `AAA0000` to `BPY9526`
 *
 * ```
 * import { washington } from 'license-plate-serial-generator'
 *
 * washington() // 'AZJ1213'
 * ```
 */
export default function washington (): string {
  const letters = bb26Random('AAA', 'BKU')
  const digits = randomNumericString(9999)

  return letters + digits
}
