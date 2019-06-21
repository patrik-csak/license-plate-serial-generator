// Spec:
// - Format:
//   - `12345`
//   - `AB-12`, `AB-123`
// - Range:

import {
  Bb26,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../lib'
import { alphaNumeric, numeric } from './rhode-island'

describe('Rhode Island', () => {
  describe('Alpha-numeric', () => {
    testSerialFormat(alphaNumeric(), /^[A-Z]{2}-\d{2,3}$/)

    testSerial('Should contain valid letters', alphaNumeric(), serial => {
      const letters = getBeginningLetters(serial)
      const validLetters = Bb26.range({
        start: 'aa',
        end: 'aaa',
      }).map(toUpperCase)

      expect(validLetters).toContain(letters)
    })

    testSerial('Should contain valid digits', alphaNumeric(), serial => {
      const digits = getEndingDigits(serial)

      expect(+digits).toBeGreaterThanOrEqual(0)
      expect(+digits).toBeLessThanOrEqual(999)
    })
  })

  describe('Numeric', () => {
    testSerialFormat(numeric(), /^\d{5}$/)
  })
})
