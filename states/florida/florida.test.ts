// Spec (as of 2019-04-24):
// - Format: `Z12 3BC`
// - Range: `Z00 0AA` to `Z89 0FW`

import florida from './florida'
import {
  Bb26,
  getEndingLetters,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'

const getDigits = (serial: string) => serial.slice(1, 3) + serial[4]

describe('Florida', () => {
  testSerialFormat(florida(), /^Z\d{2} \d[A-Z]{2}$/)

  testSerial('Should contain valid digits', florida(), serial => {
    const digits = getDigits(serial)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(890)
  })

  testSerial('Should contain valid letters', florida(), serial => {
    const digits = getDigits(serial)
    const letters = getEndingLetters(serial)

    expect(letters.length).toBe(2)

    const validLetters = Bb26.range({
      start: 'aa',
      end: +digits === 890 ? 'fy' : 'aaa',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })
})
