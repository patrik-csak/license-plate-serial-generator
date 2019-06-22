// Spec:
// - Format: `123456`
// - Range: `4` to `999999`

import delaware from './delaware'
import { testSerial, testSerialFormat } from '../../../tests/helpers'

describe('Delaware', () => {
  testSerialFormat(delaware(), /\d{1,6}/)

  testSerial('Should be a valid number', delaware(), serial => {
    expect(+serial).toBeGreaterThanOrEqual(4)
    expect(+serial).toBeLessThanOrEqual(999999)
  })
})
