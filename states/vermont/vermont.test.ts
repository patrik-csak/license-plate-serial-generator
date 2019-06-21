// Spec, as of 2018-06-30:
// - Range: `ABC 123`
// - Format: `AAB 100` to `HNP 223`

import {
  Bb26,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'
import vermont from './vermont'

describe('Vermont', () => {
  testSerialFormat(vermont(), /^[A-Z]{3} \d{3}$/)

  testSerial('Should contain valid letters', vermont(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({
      start: 'aab',
      end: 'hnq',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', vermont(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'AAB' ? 100 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'hnp' ? 223 : 999)
  })
})
