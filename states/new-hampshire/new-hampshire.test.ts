// Spec, as of 2019-05-04:
// - Format: `123 4567`
// - Range: `100 0000` to `458 5718`

import { testSerial, testSerialFormat } from '../../lib'
import newHampshire from './new-hampshire'

describe('New Hampshire', () => {
  testSerialFormat(newHampshire(), /^\d{3} \d{4}$/)

  testSerial('Should contain valid digits', newHampshire(), serial => {
    serial = serial.replace(' ', '')

    expect(+serial).toBeGreaterThanOrEqual(1000000)
    expect(+serial).toBeLessThanOrEqual(4585718)
  })
})
