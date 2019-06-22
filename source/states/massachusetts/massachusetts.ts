import { bb26Range } from 'bb26'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

export default function massachusetts (): string {
  const validLetters = bb26Range('AAA', 'AAAA')
    .filter(letters => !/[IOQU]/.test(letters))
  const letters = sample(validLetters)
  const numbers = randomNumericString(letters === 'AAA' ? 10 : 0, 99)

  return `1${letters} ${numbers}`
}
