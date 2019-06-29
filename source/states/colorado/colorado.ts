import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/**
 * Generates random serial for [Colorado](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Colorado#1975_to_present)
 *
 * **Serial format**: `ABC-D12`
 *
 * **Serial range**: `AEW-T01` to `BFM-Y21`
 *
 * ```
 * import { colorado } from 'license-plate-serial-generator'
 *
 * colorado() // 'BAU-K61'
 * ```
 */
export default function colorado (): string {
  const letters = bb26Random('AEWT', 'BFMZ')
  const numbers = randomNumericString(1, letters === 'bfmy' ? 21 : 99)

  return `${letters.slice(0, 3)}-${letters[3]}${numbers}`.toUpperCase()
}
