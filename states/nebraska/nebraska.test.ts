// Spec, as of 2019-04-09:
// - Douglas, Lancaster, and Sarpy counties:
//   - `ABC 123`
//   - Mid-'U' series to 'WDH 999'
// - Other counties:
//   - `X-A1234`
//   - `X-AB123`
//   - `XX-A123`
//   - `XX-AB12`

import {
  Bb26, getBeginningDigits,
  getBeginningLetters, getEndingDigits, randomNumber,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../lib'
import { abc123, countyCoded } from './nebraska'

describe('Nebraska', () => {
  describe('ABC 123', () => {
    testSerialFormat(abc123(), /^[A-Z]{3} \d{3}$/)

    testSerial('Should contain valid letters', abc123(), serial => {
      const letters = getBeginningLetters(serial)
      const validLetters = Bb26.range({ start: 'uma', end: 'wdi' })
        .map(toUpperCase)

      expect(letters.length).toBe(3)
      expect(validLetters).toContain(letters)
    })

    testSerial('Should contain valid digits', abc123(), serial => {
      const digits = getEndingDigits(serial)

      expect(digits.length).toBe(3)
      expect(+digits).toBeGreaterThanOrEqual(0)
      expect(+digits).toBeLessThanOrEqual(999)
    })
  })

  describe('County-coded', () => {
    const randomCounty = () => randomNumber(1, 93)

    const county = randomCounty()

    describe(`County #${county}`, () => {
      testSerialFormat(countyCoded(county), /^\d{1,2}-[A-Z]{1,2}\d{2,4}$/)

      testSerial(
        'Should start with the county code',
        countyCoded(county),
        serial => {
          const countyCode = getBeginningDigits(serial)

          expect(+countyCode).toBe(county)
        },
      )

      testSerial(
        'Should contain valid right half',
        countyCoded(county),
        serial => {
          const matches = serial.match(/^(\d+)-([A-Z]+)(\d+)$/)
          const countyCode = matches ? matches[1] : ''
          const digits = matches ? matches[3] : ''
          const letters = matches ? matches[2] : ''

          expect(letters.length).toBeGreaterThanOrEqual(1)
          expect(letters.length).toBeLessThanOrEqual(2)
          expect(digits.length).toBe(6 - countyCode.length - letters.length)
        },
      )
    })
  })
})