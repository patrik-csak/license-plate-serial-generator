// Spec, as of 2018-07-22):
// - Format: `ABC-1234`
// - Range: `PAA-1001` to `PLA-9999`

import northCarolina from './north-carolina'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('North Carolina', () => {
  testSerialFormat(northCarolina(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', northCarolina(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'paa', end: 'plb' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', northCarolina(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(digits.length).toBe(4)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'PAA' ? 1001 : 0)
    expect(+digits).toBeLessThanOrEqual(9999)
  })
})
