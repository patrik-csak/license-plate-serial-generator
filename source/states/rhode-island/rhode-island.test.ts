// Spec:
// - Format:
//   - `12345`
//   - `AB-12`, `AB-123`
// - Range:

import { bb26Range } from 'bb26'

import rhodeIsland, { alphaNumeric, numeric } from './rhode-island'
import {
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

const alphaNumericRegex = /^[A-Z]{2}-\d{2,3}$/
const numericRegex = /^\d{5}$/

describe('Rhode Island', () => {
  testSerialFormat(rhodeIsland(), [alphaNumericRegex, numericRegex])

  describe('Alpha-numeric', () => {
    testSerialFormat(alphaNumeric(), alphaNumericRegex)

    testSerial('Should contain valid letters', alphaNumeric(), serial => {
      const letters = getBeginningLetters(serial)
      const validLetters = bb26Range('AA', 'AAA')

      expect(validLetters).toContain(letters)
    })

    testSerial('Should contain valid digits', alphaNumeric(), serial => {
      const digits = getEndingDigits(serial)

      expect(+digits).toBeGreaterThanOrEqual(0)
      expect(+digits).toBeLessThanOrEqual(999)
    })
  })

  describe('Numeric', () => {
    testSerialFormat(numeric(), numericRegex)
  })
})
