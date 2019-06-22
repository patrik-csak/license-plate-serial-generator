// Spec, as of 2019-04-02:
// - Format: `123 ABC`
// - Range: `000 AAA` to `999 DEV`

import { bb26Range } from 'bb26'

import louisiana from './louisiana'
import {
  getBeginningDigits, getEndingLetters,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

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

    const validLetters = bb26Range('AAA', digits === '999' ? 'DEW' : 'AAAA')

    expect(validLetters).toContain(letters)
  })
})
