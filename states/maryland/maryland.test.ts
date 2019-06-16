// Spec, as of 2019-05-27:
// - Format: `1AB2345`
// - Range: `8CN0000` to `9DW2552`

import {
  Bb26,
  getBeginningDigits,
  getEndingDigits,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../modules'
import maryland from './maryland'

const getLetters = (serial: string): string => {
  const matches = serial.match(/^\d([A-Z]+)/)
  return matches ? matches[1] : ''
}

describe('Maryland', () => {
  testSerialFormat(maryland(), /\d[A-Z]{2}\d{4}$/)

  testSerial('Should start with a digit', maryland(), serial => {
    const digit = getBeginningDigits(serial)

    expect(+digit).toBeGreaterThanOrEqual(8)
    expect(+digit).toBeLessThanOrEqual(9)
  })

  testSerial('Should contain valid letters', maryland(), serial => {
    const digit = +getBeginningDigits(serial)
    const letters = getLetters(serial)

    expect(letters.length).toBe(2)

    const validLetters = Bb26.range({
      start: digit === 8 ? 'cn' : 'aa',
      end: digit === 9 ? 'dx' : 'aaa',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Should contain valid digits', maryland(), serial => {
    const digits = getEndingDigits(serial)
    const letters = getLetters(serial)

    expect(digits.length).toBe(4)
    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(letters === 'DW' ? 2552 : 9999)
  })
})
