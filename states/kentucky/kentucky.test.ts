// Spec, as of 2019-05-28:
// - Format: `123 ABC`
// - Range: `901 JCB` to `253 ZJK`

import testSerial from '../../modules/test-serial'
import kentucky from './kentucky'
import {
  Bb26,
  getBeginningDigits,
  getEndingLetters,
  testSerialFormat,
  toUpperCase,
} from '../../modules'

describe('Kentucky', () => {
  testSerialFormat(kentucky(), /^\d{3} [A-Z]{3}$/)

  testSerial('Should contain valid digits', kentucky(), serial => {
    const digits = getBeginningDigits(serial)
    const letters = getEndingLetters(serial)

    expect(digits.length).toBe(3)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'JCB' ? 901 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'ZJK' ? 253 : 999)
  })

  testSerial('Should contain valid letters', kentucky(), serial => {
    const letters = getEndingLetters(serial)

    const validLetters = Bb26.range({ start: 'jcb', end: 'zjk' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })
})
