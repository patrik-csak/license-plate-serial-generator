// Spec, as of 2019-05-02:
// - Format: `ABC-D12`
// - Range: AEW-T01 to BFM-Y21

import colorado from './colorado'
import {
  Bb26,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'

const getLetters = (serial: string) => serial.slice(0, 3) + serial[4]

describe('Colorado', () => {
  testSerialFormat(colorado(), /^[A-Z]{3}-[A-Z]\d{2}$/)

  testSerial('Should contain valid letters', colorado(), serial => {
    const letters = getLetters(serial)
    const validLetters = Bb26.range({ start: 'aewt', end: 'bfmz' })
      .map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', colorado(), serial => {
    const digits = getEndingDigits(serial)

    expect(digits.length).toBe(2)

    switch (getLetters(serial)) {
      case 'AEWT':
        expect(+digits).toBeGreaterThanOrEqual(1)
        expect(+digits).toBeLessThanOrEqual(99)
        break
      case 'BFMY':
        expect(+digits).toBeGreaterThanOrEqual(0)
        expect(+digits).toBeLessThanOrEqual(21)
        break
      default:
        expect(+digits).toBeGreaterThanOrEqual(0)
        expect(+digits).toBeLessThanOrEqual(99)
    }
  })
})
