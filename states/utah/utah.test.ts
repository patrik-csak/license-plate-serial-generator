// Spec, as of 2019-05:
// - Arch:
//   - Format: 'A12 3BC'
//   - Range: 'Z00 1AA' to 'V21 5RK' (progressed backwards)
// - God:
//   - Format: '1A2BC'
//   - Range: '0A0AA' to '5E1NY'
// - Ski:
//   - Format: 'A12 3BC'
//   - Range: 'A00 1AA' to 'F76 4TE'

import {
  Bb26,
  getBeginningLetters,
  getEndingLetters,
  testSerial,
  testSerialFormat,
  toUpperCase,
} from '../../lib'
import { arch } from './utah'

describe('Utah', () => {
  describe('Arch', () => {
    testSerialFormat(arch(), /^[A-Z]\d{2} \d[A-Z]{2}$/)

    testSerial('Should start with a valid letter', arch(), serial => {
      const letter = getBeginningLetters(serial)

      expect(letter).toMatch(/^[V-Z]$/)
    })

    testSerial('Should contain valid digits', arch(), serial => {
      const letter = getBeginningLetters(serial)
      const digits = serial.substring(1, 5).replace(' ', '')

      expect(+digits).toBeGreaterThanOrEqual(letter === 'V' ? 215 : 0)
      expect(+digits).toBeLessThanOrEqual(letter === 'Z' ? 1 : 999)
    })

    testSerial('Should end with valid letters', arch(), serial => {
      const letters = getEndingLetters(serial)
      const validLetters = Bb26.range({
        start: serial.startsWith('V21 5') ? 'rk' : 'aa',
        end: serial.startsWith('Z00 1') ? 'ab' : 'aaa',
      }).map(toUpperCase)

      expect(validLetters).toContain(letters)
    })
  })
})
