// Spec:
// - Format: `ABC1234`
// - Range: `PFA0000` to `PLZ9999`

import georgia from './georgia'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'

describe('Georgia', () => {
  testSerialFormat(georgia(), /^[A-Z]{3}\d{4}$/)

  testSerial('Should contain valid letters', georgia(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'pfa', end: 'pma' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', georgia(), serial => {
    const digits = getEndingDigits(serial)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(9999)
  })
})
