// Spec, as of 2019-06-07:
// - Format: `A12-BCD`
// - Range: `A10-EFF` to `C62-LKA`
// - `I`, `O`, `Q` not used in any position

import {
  Bb26,
  getBeginningLetters,
  getEndingLetters,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'
import newJersey from './new-jersey'

describe('New Jersey', () => {
  testSerialFormat(newJersey(), /^[A-Z]\d{2}-[A-Z]{3}$/)

  testSerial('Should start with a valid letter', newJersey(), serial => {
    const letter = getBeginningLetters(serial)

    expect(letter.length).toBe(1)
    expect(letter).toMatch(/[A-C]/)
  })

  testSerial('Should contain valid digits', newJersey(), serial => {
    const digits = serial.substring(1, 3)
    const letter = getBeginningLetters(serial)

    expect(+digits).toBeGreaterThanOrEqual(letter === 'A' ? 10 : 0)
    expect(+digits).toBeLessThanOrEqual(letter === 'C' ? 62 : 99)
  })

  testSerial('Should end with valid letters', newJersey(), serial => {
    const left = serial.substring(0, 3)
    const letters = getEndingLetters(serial)
    const validLetters = Bb26.range({
      start: left === 'A10' ? 'eff' : 'aaa',
      end: left === 'C62' ? 'lkb' : 'aaaa',
    }).map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial(
    'Should not contain \'I\', \'O\', or \'Q\'',
    newJersey(),
    serial => {
      expect(serial).not.toMatch(/[IOQ]/)
    },
  )
})
