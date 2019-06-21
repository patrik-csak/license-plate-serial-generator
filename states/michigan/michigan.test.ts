// Spec, as of 2019-05-29:
// - Format: `ABC 1234`
// - Range: `DAA 0000` to `ECR 9999`

import michigan from './michigan'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('Michigan', () => {
  testSerialFormat(michigan(), /^[A-Z]+ \d{4}$/)

  testSerial('Should contain valid letters', michigan(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'daa', end: 'ecs' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', michigan(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBe(4)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(9999)
  })
})
