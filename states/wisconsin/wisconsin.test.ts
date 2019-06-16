// Spec, as of 2019-04-30:
// - Format: `ABC-1234`
// - Range: `AAA-1001` to `AFR-2643`

import {
  Bb26,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../modules'
import wisconsin from './wisconsin'

describe('Wisconsin', () => {
  testSerialFormat(wisconsin(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', wisconsin(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({ start: 'aaa', end: 'afs' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', wisconsin(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'AAA' ? 1001 : 0)
    expect(+digits).toBeLessThanOrEqual(letters === 'AFR' ? 2643 : 9999)
  })
})
