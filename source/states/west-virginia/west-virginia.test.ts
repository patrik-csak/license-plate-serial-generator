// Spec:
// - Format:
//   - `0A 1234`
//   - `0AB 123`
//   - `01A 123`
//   - `AA 1234`
//   - `AAB 123`
//   - `A1A 123`
// - Notes:
//   - First character corresponds to month of expiration:
//     - 1-9 indicate Jan-Sep
//     - O, N, D indicate Oct, Nov, Dec
//   - Series 'S' and 'SA-SZ' reserved for optional Scenic plates

import westVirginia from './west-virginia'
import {
  getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

describe('West Virginia', () => {
  testSerialFormat(westVirginia(), /^[\dOND][\dA-Z]{1,2} \d{3,4}$/)

  testSerial('Should start with a month code', westVirginia(), serial => {
    const monthCode = serial[0]

    expect(monthCode).toMatch(/^[0-9OND]$/)
  })

  testSerial(
    'Should contain valid characters after the month code',
    westVirginia(),
    serial => {
      const match = serial.match(/^.([\dA-Z]{1,2}) /)
      const characters = match ? match[1] : ''

      expect(characters).toMatch(/^[\dA-Z][A-Z]?$/)
    },
  )

  testSerial('Should contain valid digits', westVirginia(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBeGreaterThanOrEqual(3)
    expect(digits.length).toBeLessThanOrEqual(4)
  })
})
