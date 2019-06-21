// Spec, as of 2019-04-09:
// - Format: `ABC 123`
// - Range: `GXV 200` to `IBB 999`

import iowa from './iowa'
import {
  Bb26,
  getBeginningLetters,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('Iowa', () => {
  testSerialFormat(iowa(), /^[A-Z]{3} \d{3}$/)

  testSerial('Should contain valid letters', iowa(), serial => {
    const letters = getBeginningLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({ start: 'gxv', end: 'ibc' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', iowa(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letters === 'GXV' ? 200 : 0)
    expect(+digits).toBeLessThanOrEqual(999)
  })
})
