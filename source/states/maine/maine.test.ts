// Spec, as of 2019-05-29:
// - Format: `1234 AB`
// - Range: `1 GA` to `5252 XK`
// Letter 'O' not used

import maine from './maine'
import {
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

describe('Maine', () => {
  testSerialFormat(maine(), /^\d{1,4} [A-Z]{2}$/)

  testSerial('Should contain valid digits', maine(), serial => {
    const digits = getBeginningDigits(serial)

    expect(+digits).toBeGreaterThanOrEqual(1)
    expect(+digits).toBeLessThanOrEqual(5252)
  })

  testSerial('Should contain two letters', maine(), serial => {
    const letters = getEndingLetters(serial)

    expect(letters.length).toBe(2)
  })

  testSerial('Should not contain the letter \'O\'', maine(), serial => {
    expect(serial).not.toMatch('O')
  })
})
