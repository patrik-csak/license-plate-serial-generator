import { randomNumericString } from '../../lib'

export default function newHampshire () {
  const numbers = randomNumericString(1000000, 4585718)

  return numbers.slice(0, 3) + ' ' + numbers.slice(3)
}
