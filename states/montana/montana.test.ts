// Spec:
// - Format: `1-12345A` or `10-1234A`, where left half is county code

import {
  getBeginningDigits,
  getEndingLetters,
  testSerial,
  testSerialFormat,
} from '../../modules'
import montana from './montana'

describe('Montana', () => {
  testSerialFormat(montana(), /^\d{1,2}-\d{4,5}[A-Z]$/)

  testSerial('Should contain valid county code', montana(), serial => {
    const countyCode = getBeginningDigits(serial)

    expect(countyCode.length).toBeGreaterThanOrEqual(1)
    expect(countyCode.length).toBeLessThanOrEqual(2)
    expect(+countyCode).toBeGreaterThanOrEqual(1)
    expect(+countyCode).toBeLessThanOrEqual(56)
  })

  testSerial('Should contain valid digits', montana(), serial => {
    const matches = serial.match(/^\d+-(\d+)/)
    const digits = matches ? matches[1] : ''

    expect(digits.length).toBeGreaterThanOrEqual(4)
    expect(digits.length).toBeLessThanOrEqual(5)
    expect(+digits).toBeGreaterThanOrEqual(0)
    expect(+digits).toBeLessThanOrEqual(99999)
  })

  testSerial('Should end with a letter', montana(), serial => {
    const letter = getEndingLetters(serial)

    expect(letter.length).toBe(1)
    expect(letter).toMatch(/^[A-Z]$/)
  })
})
