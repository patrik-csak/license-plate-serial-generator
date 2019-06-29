import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

/**
 * Generates random serial for [Kansas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Kansas#1975_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `000 LJX` to `444 MBE`
 *
 * ```
 * import { kansas } from 'license-plate-serial-generator'
 *
 * kansas() // '233 LUH'
 * ```
 */
export default function kansas (): string {
  const letters: string = bb26Random('AAA', 'MBF')
  const numbers: string = randomNumericString(999)

  return `${numbers} ${letters}`.toUpperCase()
}
