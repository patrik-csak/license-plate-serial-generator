import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

/**
 * Generates random serial for [Arkansas](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Arkansas#1968_to_present)
 *
 * **Serial format**: `123 ABC`
 *
 * **Serial range**: `001 KPG` to `999 YFZ`
 *
 * ```
 * import { arkansas } from 'license-plate-serial-generator'
 *
 * arkansas() // '489 MKJ'
 * ```
 */
export default function arkansas (): string {
  const letters: string = bb26Random('KPG', 'YGA')
  const numbers: string = randomNumericString(1, 999)

  return `${numbers} ${letters}`
}
