// Spec (as of 2019-05-18):
// - Format: `1ABC123`
// - Range: `6TPW000` to `8KPP139`

import california from './california'
import { Bb26, testSerial, testSerialFormat, toUpperCase } from '../../lib'

describe('California', () => {
  testSerialFormat(california(), /^\d[A-Z]{3}\d{3}$/)

  testSerial('First digit should be between 6 and 8', california(), serial => {
    expect(+serial[0]).toBeGreaterThanOrEqual(6)
    expect(+serial[0]).toBeLessThanOrEqual(8)
  })

  testSerial('Letters should be valid', california(), serial => {
    const letters = serial.slice(1, 4)
    let validLetters: string[]

    switch (+serial[0]) {
      case 6:
        validLetters = Bb26.range({ start: 'tpw', end: 'aaaa' })
        break
      case 7:
        validLetters = Bb26.range({ start: 'aaa', end: 'aaaa' })
        break
      case 8:
        validLetters = Bb26.range({ start: 'aaa', end: 'kpq' })
        break
      default :
        throw new Error('Digit should be between 6 and 8')
    }

    validLetters = validLetters.map(toUpperCase)

    expect(validLetters).toContain(letters)
  })

  testSerial('Digits should be valid', california(), serial => {
    const digits = serial.slice(4)

    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(serial === 'KPP' ? 139 : 999)
  })
})
