import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

/**
 * Generates random serial for [Kentucky](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Kentucky#1975_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `901 JCB` to `253 ZJK`
 *
 * ```
 * import { kentucky } from 'license-plate-serial-generator'
 *
 * kentucky() // '275 RNG'
 * ```
 */
export default function kentucky (): string {
  const letters = bb26Random('JCB', 'ZJL')
  const numbers = randomNumericString(
    letters === 'JCB' ? 901 : 0,
    letters === 'ZJK' ? 253 : 999,
  )

  return `${numbers} ${letters}`
}
