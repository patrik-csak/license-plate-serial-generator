// Spec, as of 2019-04-30:
// - Format: `ABC-1234`
// - Range: `AAA-1001` to `AFR-2643`

import wisconsin from './wisconsin'
import {
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'
import { bb26Range } from 'bb26'

describe('Wisconsin', () => {
  testSerialFormat(wisconsin(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', wisconsin(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = bb26Range('AAA', 'AFR')

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', wisconsin(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'AAA' ? 1001 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'AFR' ? 2643 : 9999)
  })
})
