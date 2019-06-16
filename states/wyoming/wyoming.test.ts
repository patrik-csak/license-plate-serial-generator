// Spec:
// - Formats:
//   - `1-12345`
//   - `11-12345`
// - First digit/digits county code

import testSerialFormat from '../../modules/test-serial-format'
import wyoming from './wyoming'
import testSerial from '../../modules/test-serial'
import getBeginningDigits from '../../modules/get-beginning-digits'
import numberRange from '../../modules/number-range'
import getEndingDigits from '../../modules/get-ending-digits'

describe('Wyoming', () => {
  testSerialFormat(wyoming(), /^\d{1,2}-\d{5}$/)

  testSerial('Should contain valid county code', wyoming(), serial => {
    const countyCode = getBeginningDigits(serial)

    expect(countyCode.length).toBeGreaterThanOrEqual(1)
    expect(countyCode.length).toBeLessThanOrEqual(2)

    const validDigits = numberRange(1, 23).concat(99)

    expect(validDigits).toContain(+countyCode)
  })

  testSerial('Should contain valid digits', wyoming(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBe(5)
  })
})
