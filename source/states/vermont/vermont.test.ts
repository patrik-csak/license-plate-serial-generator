// Spec, as of 2018-06-30:
// - Format: `ABC 123`
// - Range: `AAB 100` to `HNP 223`

import { bb26Range } from 'bb26'

import vermont from './vermont'
import {
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

describe('Vermont', () => {
  testSerialFormat(vermont(), /^[A-Z]{3} \d{3}$/)

  testSerial('Should contain valid letters', vermont(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = bb26Range('AAB', 'HNQ')

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', vermont(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'AAB' ? 100 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'hnp' ? 223 : 999)
  })
})
