// Spec (as of 2019-04-06):
// - Format: `ABC 123`
// - Range: `LZD 101` to `RFE 478`

import {
  Bb26,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../modules'
import southCarolina from './south-carolina'

describe('South Carolina', () => {
  testSerialFormat(southCarolina(), /^[A-Z]+ \d{3}$/)

  testSerial('Should contain valid letters', southCarolina(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'lzd', end: 'rff' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', southCarolina(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(digits.length).toBe(3)
    expect(+digits).toBeGreaterThanOrEqual(letters === 'LZD' ? 101 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'RFE' ? 478 : 999)
  })
})
