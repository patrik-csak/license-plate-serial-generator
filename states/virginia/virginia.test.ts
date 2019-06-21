// Spec, as of 2019-06-16:
// - Format: `ABC-1234`
// - Range:
//   - `VAA-1000` to `VZZ-9999`
//   - `UZZ-9999` to `UPA-2674` (progressing backwards)

import {
  Bb26,
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../lib'
import virginia from './virginia'

describe('Virginia', () => {
  testSerialFormat(virginia(), /^[A-Z]{3}-\d{4}$/)

  testSerial('Should contain valid letters', virginia(), serial => {
    const letters = getBeginningLetters(serial)
    const validLetters = Bb26.range({ start: 'vaa', end: 'waa' })
      .concat(Bb26.range({ start: 'upa', end: 'vaa' }))
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', virginia(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getBeginningLetters(serial)
    let rangeStart = 0

    if (letters === 'VAA') rangeStart = 1000
    else if (letters === 'UPA') rangeStart = 2674

    expect(+digits).toBeGreaterThanOrEqual(rangeStart)
    expect(+digits).toBeLessThanOrEqual(9999)
  })
})
