// Spec, as of 2019-04-15:
// - Format: `123 ABC`
// - Range: `000 BTR` to `825 CNK`

import {
  Bb26,
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat, toUpperCase,
} from '../../modules'
import northDakota from './north-dakota'

describe('North Dakota', () => {
  testSerialFormat(northDakota(), /^\d{3} [A-Z]{3}$/)

  testSerial('Should contain valid digits', northDakota(), serial => {
    const digits = getBeginningDigits(serial)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(825)
  })

  testSerial('Should contain valid letters', northDakota(), serial => {
    const digits = getBeginningDigits(serial)
    const letters = getEndingLetters(serial)

    const validLetters = Bb26.range({
      start: +digits === 0 ? 'btr' : 'aaa',
      end: +digits === 825 ? 'cnl' : 'aaaa',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })
})
