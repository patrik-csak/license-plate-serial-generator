// Spec, as of 2019-05-20:
// - Format: `123 ABC`
// - Range: `000 LJX` to `444 MBE`

import testSerial from '../../lib/test-serial'
import kansas from './kansas'
import {
  Bb26,
  getBeginningDigits,
  getEndingLetters,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

describe('Kansas', () => {
  testSerialFormat(kansas(), /^\d{3} [A-Z]+$/)

  testSerial('Should contain valid digits', kansas(), serial => {
    const digits = getBeginningDigits(serial)
    const letters = getEndingLetters(serial)

    expect(digits.length).toBe(3)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(letters === 'MBE' ? 444 : 999)
  })

  testSerial('Should contain valid letters', kansas(), serial => {
    const digits = getBeginningDigits(serial)
    const letters = getEndingLetters(serial)

    expect(letters.length).toBe(3)

    const validLetters = Bb26.range({
      start: digits === '000' ? 'ljx' : 'aaa',
      end: digits === '444' ? 'mbf' : 'aaaa',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })
})
