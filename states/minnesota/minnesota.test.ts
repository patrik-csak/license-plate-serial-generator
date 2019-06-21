// Spec, as of 2019-05-22:
// - Format: `ABC-123`
// - Range: `AAA-001` to `DBY-020`

import {
  Bb26,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../lib'
import minnesota from './minnesota'

describe('Minnesota', () => {
  testSerialFormat(minnesota(), /^[A-Z]{3}-\d{3}$/)

  testSerial('Should contain valid letters', minnesota(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({ start: 'aaa', end: 'dbz' })
      .map(toUpperCase)

    expect(letters.length).toBe(3)
    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', minnesota(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(digits.length).toBe(3)
    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(letters === 'DBY' ? 20 : 999)
  })
})
