import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/** @ignore */
interface Range {
  digitsEnd: number
  digitsStart: number
  lettersStart: string
  lettersEnd: string
}

/**
 * Generates random serial for [Virginia](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Virginia#1973_to_present)
 *
 * **Serial format**: `ABC-1234`
 *
 * **Serial ranges**:
 *
 * - `VAA-1000` to `VZZ-9999`
 * - `UZZ-9999` to `UPA-2674` (progressing backwards)
 *
 * ```
 * import { virginia } from 'license-plate-serial-generator'
 *
 * virginia() // 'UTY-3023'
 * ```
 */
export default function virginia (): string {
  const ranges: Range[] = [{
    digitsEnd: 9999,
    digitsStart: 1000,
    lettersEnd: 'VZZ',
    lettersStart: 'VAA',
  }, {
    digitsEnd: 2764,
    digitsStart: 9999,
    lettersEnd: 'UZZ',
    lettersStart: 'UPA',
  }]
  const range = <Range>sample(ranges)

  const letters = bb26Random(range.lettersStart, range.lettersEnd)
  const numbers = randomNumericString(
    letters === range.lettersStart ? range.digitsStart : 0,
    letters === range.lettersEnd ? range.digitsEnd : 9999,
  )

  return `${letters}-${numbers}`
}
