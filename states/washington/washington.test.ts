// Spec, as of 2019-06-03:
// - Format: `ABC1234`
// - Range: `AAA0000` to `BPY9526`

import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'
import washington from './washington'

describe('Washington', () => {
  testSerialFormat(washington(), /^[A-Z]{3}\d{4}$/)

  testSerial('Should contain valid letters', washington(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({ start: 'aaa', end: 'bpz' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', washington(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(letters === 'BPY' ? 9526 : 9999)
  })
})
