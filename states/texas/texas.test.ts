// Spec, as of 2019-05-27:
// - Format: `ABC-1234`
// - Range: `BBB-0001` to `MCZ-9999`

import texas from './texas'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'

describe('Texas', () => {
  testSerialFormat(texas(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', texas(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'bbb', end: 'mda' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', texas(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBe(4)
    expect(+digits).toBeGreaterThanOrEqual(1)
    expect(+digits).toBeLessThanOrEqual(9999)
  })
})
