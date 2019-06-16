// Spec, as of 2018-06-05:
// - Format: `ABC1234`
// - Range:
//   - `AAA0001` to `CJJ9999`

import { Bb26, randomNumericString } from '../../modules'

const arizona = (): string => {
  const letters: string = Bb26.randomString('aaa', 'cjj')
  const numbers: string = randomNumericString(1, 9999)

  return letters.toUpperCase() + numbers
}

export default arizona
