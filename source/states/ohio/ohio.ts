import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

/**
 * Generates random serial for [Ohio](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Ohio#1974_to_present)
 *
 * **Serial format**: `ABC 1234`
 *
 * **Serial range**: `FWA 1000` to `HUF 1415`
 *
 * ```
 * import { ohio } from 'license-plate-serial-generator'
 *
 * ohio() // 'GSR 8231'
 * ```
 */
export default function ohio (): string {
  const letters = bb26Random('FWA', 'HME')
  const numbers = randomNumericString(
    letters === 'FWA' ? 1000 : 0,
    9999,
  )

  return `${letters} ${numbers}`
}
