// Spec, as of 2019-05-11:
// - Format: `AB-1234`
// - Range: `FN-4000` to `GB-4718`

import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'
import washingtonDc from './washington-dc'

describe('Washington DC', () => {
  testSerialFormat(washingtonDc(), /^[A-Z]{2}-\d{4}$/)

  testSerial('Should contain valid letters', washingtonDc(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({ start: 'fn', end: 'gb' }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', washingtonDc(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'FN' ? 4000 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'GB' ? 4718 : 9999)
  })
})
