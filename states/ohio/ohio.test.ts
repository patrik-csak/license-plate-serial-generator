// Spec, as of 2019-05-13:
// - Format: `ABC 1234`
// - Range: `FWA 1000` to `HUF 1415`

import {
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'
import ohio from './ohio'
import Bb26 from '../../lib/bb26'

describe('Ohio', () => {
  testSerialFormat(ohio(), /^[A-Z]{3} \d{4}$/)

  testSerial('Should contain valid letters', ohio(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'fwa', end: 'hug' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', ohio(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(digits.length).toBe(4)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'FWA' ? 1000 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'HUF' ? 1415 : 9999)
  })
})
