// Spec, as of 2014-01-02:
// - Format: 0AB1234 or 00AB123
// - `0` or `00` is county code

import range = require('lodash.range')
import alabama from './alabama'
import testSerial from '../../lib/test-serial'
import getBeginningDigits from '../../lib/get-beginning-digits'

// https://en.wikipedia.org/wiki/Vehicle_registration_plates_of_Alabama#County_coding
const countyCodes = range(1, 68).concat(70, 80)

describe('Alabama', () => {
  testSerial('Should start with county code', alabama(), serial => {
    const countyCode = getBeginningDigits(serial)

    expect(countyCode.length).toBeGreaterThanOrEqual(1)
    expect(countyCode.length).toBeLessThanOrEqual(2)
    expect(countyCodes).toContain(+countyCode)
  })

  testSerial(
    'Should contain two letters after the county code',
    alabama(),
    serial => {
      const countyCode = getBeginningDigits(serial)

      const letters = serial.substring(countyCode.length, 2 + countyCode.length)

      expect(letters).toMatch(/[A-Z]{2}/)
    },
  )

  testSerial('Should end with digits', alabama(), serial => {
    const countyCode = getBeginningDigits(serial)

    const digits = serial.substring(2 + countyCode.length)

    expect(digits).toMatch(new RegExp(`\\d{${5 - countyCode.length}}`))
  })
})
