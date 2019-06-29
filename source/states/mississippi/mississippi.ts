import sample from 'lodash.sample'

import counties, { County } from './mississippi-counties'
import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/**
 * Generates random serial for [Mississippi](https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Mississippi#1976_to_present)
 *
 * **Serial format**: `ABC 1234`, where `AB` is county code
 *
 * ```
 * import { mississippi } from 'license-plate-serial-generator'
 *
 * mississippi() // 'CRW 1349'
 * ```
 */
export default function mississippi (): string {
  // TODO: Weigh county choice by population
  const county = <string>sample((<County>sample(counties)).codes)
  const letters = county + bb26Random('Z')
  const numbers = randomNumericString(9999)

  return `${letters} ${numbers}`
}
