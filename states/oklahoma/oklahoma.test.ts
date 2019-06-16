// Spec, as of 2019-04-14:
// - Format: `ABC-123`
// - Range: `AAA-001` to `JRK-999`

import oklahoma from './oklahoma'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'

describe('Oklahoma', () => {
  testSerialFormat(oklahoma(), /^[A-Z]+-\d{3}$/)

  testSerial('Should contain valid letters', oklahoma(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'aaa', end: 'jrl' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', oklahoma(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBe(3)

    expect(+digits).toBeGreaterThanOrEqual(1)
    expect(+digits).toBeLessThanOrEqual(999)
  })
})
