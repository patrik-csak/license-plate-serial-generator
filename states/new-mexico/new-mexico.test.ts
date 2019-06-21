// Spec, as of 2019-05-20):
// - Format: `123-ABC`
// - Range: `001-MAA` to `999-WJT`

import testSerial from '../../lib/test-serial'
import newMexico from './new-mexico'
import getBeginningDigits from '../../lib/get-beginning-digits'
import testSerialFormat from '../../lib/test-serial-format'

describe('New Mexico', () => {
  testSerialFormat(newMexico(), /^\d{3}-[A-Z]+$/)

  testSerial('Should contain the correct digits', newMexico(), serial => {
    const digits = getBeginningDigits(serial)

    expect(digits.length).toBe(3)

    expect(+digits).toBeGreaterThanOrEqual(1)
  })
})
