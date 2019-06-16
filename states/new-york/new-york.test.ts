// Spec, as of 2019-03-19:
// - Format: `ABC-1234`
// - Range: `FAA-1000` to `JJS-6999`

import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'
import newYork from './new-york'

describe('New York', () => {
  testSerialFormat(newYork(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', newYork(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({
      start: 'faa',
      end: 'jjt',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', newYork(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'FAA' ? 1000 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'JJS' ? 6699 : 9999)
  })
})
