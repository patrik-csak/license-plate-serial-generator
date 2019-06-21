// Spec, as of 2019-05-31:
// Format: `ABC-1234`
// Range: `KLF-0000 to LBP-1791`

import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'
import pennsylvania from './pennsylvania'

describe('Pennsylvania', () => {
  testSerialFormat(pennsylvania(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', pennsylvania(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'klf', end: 'lbc' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', pennsylvania(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(digits.length).toBe(4)
    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(letters === 'LBP' ? 1791 : 9999)
  })
})
