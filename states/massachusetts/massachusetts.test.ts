// Spec:
// - Format: `1ABC 23`
// - Range: `1AAA 10 - 9ZZZ 99`
// - Letters `I`, `O`, `Q`, and `U` not used

import {
  getBeginningDigits,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../lib'
import massachusetts from './massachusetts'

describe('Massachusetts', () => {
  testSerialFormat(massachusetts(), /^\d[A-HJ-NPRSTV-Z]{3} \d{2}$/)

  testSerial('Should start with 1', massachusetts(), serial => {
    const digit = getBeginningDigits(serial)

    expect(digit.length).toBe(1)
    expect(+digit).toBe(1)
  })

  testSerial('Should contain valid letters', massachusetts(), serial => {
    const letters = getBeginningLetters(serial.substring(1))

    expect(letters.length).toBe(3)
    expect(letters).toMatch(/^[A-HJ-NPRSTV-Z]{3}$/)
  })

  testSerial('Should end with digits', massachusetts(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial.substring(1))

    expect(digits.length).toBe(2)
    expect(+digits).toBeGreaterThanOrEqual(letters === 'AAA' ? 10 : 0)
    expect(+digits).toBeLessThanOrEqual(99)
  })
})
