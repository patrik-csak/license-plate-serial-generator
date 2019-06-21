// Spec, as of 2019-04-02:
// - Format: `123 ABC`
// - Range: `000 AAA` to `999 DEV`

import louisiana from './louisiana'
import {
  Bb26,
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('Louisiana', () => {
  testSerialFormat(louisiana(), /^\d{3} [A-Z]{3}$/)

  testSerial('Should contain the correct digits', louisiana(), serial => {
    const digits = getBeginningDigits(serial)

    expect(digits.length).toBe(3)
  })

  testSerial('Should contain the correct letters', louisiana(), serial => {
    const digits = getBeginningDigits(serial)
    const letters = getEndingLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({
      start: 'aaa',
      end: digits === '999' ? 'dew' : 'aaaa',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })
})
