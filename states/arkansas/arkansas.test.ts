// Spec, as of 2019-02-03:
// - Format: `123 ABC`
// - Range: `001 KPG` to `999 YFZ`

import arkansas from './arkansas'
import {
  Bb26,
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'

describe('Arkansas', () => {
  testSerialFormat(arkansas(), /^\d{3} [A-Z]{3}$/)

  testSerial('Should contain valid letters', arkansas(), serial => {
    const letters = getEndingLetters(serial)

    const validLetters = Bb26.range({ start: 'kpg', end: 'yga' })
      .map(toUpperCase)

    expect(letters.length).toBe(3)
    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', arkansas(), serial => {
    const digits = getBeginningDigits(serial)

    expect(digits.length).toBe(3)
    expect(+digits).toBeGreaterThanOrEqual(1)
    expect(+digits).toBeLessThanOrEqual(999)
  })
})
