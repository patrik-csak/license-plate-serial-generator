// Spec, as of 2017:
// - Format:
//   - `123A`
//   - `123AB`
//   - `123ABC`

import indiana from './indiana'
import { testSerialFormat } from '../../../tests/helpers'

describe('Indiana', () => {
  testSerialFormat(indiana(), /^\d{3}[A-Z]{1,3}$/)
})
