// Spec, as of 2019-05-20:
// - Format: `123 ABC`
// - Range: `000 LJX` to `444 MBE`

import { bb26Range } from 'bb26'

import kansas from './kansas'
import {
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

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

    const validLetters = bb26Range(
      digits === '000' ? 'LJX' : 'AAA',
      digits === '444' ? 'MBF' : 'AAAA',
    )

    expect(validLetters).toContain(letters)
  })
})
