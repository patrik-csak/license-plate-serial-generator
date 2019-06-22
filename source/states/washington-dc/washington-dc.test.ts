// Spec, as of 2019-05-11:
// - Format: `AB-1234`
// - Range: `FN-4000` to `GB-4718`

import { bb26Range } from 'bb26'

import washingtonDc from './washington-dc'
import {
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

describe('Washington DC', () => {
  testSerialFormat(washingtonDc(), /^[A-Z]{2}-\d{4}$/)

  testSerial('Should contain valid letters', washingtonDc(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = bb26Range('FN', 'GC')

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', washingtonDc(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'FN' ? 4000 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'GB' ? 4718 : 9999)
  })
})
