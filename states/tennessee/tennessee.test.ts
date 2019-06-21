// Spec, as of 2018-09-02:
// - Format: `ABC-123`
// - Range: `BBB-001` to `BVK-999`

import tennessee from './tennessee'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('Tennessee', () => {
  testSerialFormat(tennessee(), /^[A-Z]{3}-\d{3}$/)

  testSerial('Should contain valid letters', tennessee(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'bbb', end: 'bvl' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', tennessee(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBe(3)

    expect(+digits).toBeGreaterThanOrEqual(1)
    expect(+digits).toBeLessThanOrEqual(999)
  })
})
