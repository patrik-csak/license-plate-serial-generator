import { bb26Range } from 'bb26'

import hawaii, {
  hawaiiCounty,
  honoluluCounty,
  kauaiCounty,
  mauiCounty,
} from './hawaii'
import {
  getBeginningLetters, getEndingDigits,
  testSerial,
  testSerialFormat,
} from '../../../tests/helpers'

describe('Hawaii', () => {
  testSerialFormat(hawaii(), /^[A-Z]{3} \d{3}$/)

  describe('Honolulu county', () => {
    // Honolulu county spec:
    //   - Format: `ABC 123`
    //     - First letter is E-G, J, N, P, R-Y
    //   - Range: `EAA 000` - `TTT 999`
    //   - Sequence may not include H, K, L, M in any position

    testSerial('Should match the correct format', honoluluCounty(), serial => {
      expect(serial).toMatch(/^[E-GJNPR-Y][A-GIJN-Z]{2} \d{3}$/)
    })

    testSerial('Should contain valid letters', honoluluCounty(), serial => {
      const letters = getBeginningLetters(serial)

      expect(letters.length).toBe(3)
      expect(letters[0]).toMatch(/[E-GJNPR-Y]/)

      const validLetters = bb26Range('EAA', 'HAA')
        .concat(bb26Range('JAA', 'KAA'))
        .concat(bb26Range('NAA', 'OAA'))
        .concat(bb26Range('PAA', 'QAA'))
        .concat(bb26Range('RAA', 'TTU'))
        .filter(string => !/[HKLM]/.test(string))

      expect(validLetters).toContain(letters)
    })

    testSerial('Should contain valid digits', honoluluCounty(), serial => {
      const digits = getEndingDigits(serial)

      expect(digits.length).toBe(3)
      expect(+digits).toBeGreaterThanOrEqual(0)
      expect(+digits).toBeLessThanOrEqual(999)
    })
  })

  describe('Hawaii county', () => {
    // Hawaii county spec:
    //   - Format: `[HZ]AB 123`

    testSerialFormat(hawaiiCounty(), /^[HZ][A-Z]{2} \d{3}$/)
  })

  describe('Kauai county', () => {
    // Kauai county spec:
    //   - Format: `KAB 123`

    testSerial('Should match the correct format', kauaiCounty(), serial => {
      expect(serial).toMatch(/^K[A-Z]{2} \d{3}$/)
    })
  })

  describe('Maui county', () => {
    // Maui county spec:
    //   - Format: `[ML]AB 123`

    testSerialFormat(mauiCounty(), /^[LM][A-Z]{2} \d{3}$/)
  })
})
