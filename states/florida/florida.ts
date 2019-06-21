import { Bb26, randomNumericString } from '../../lib'

const florida = (): string => {
  let serial = 'Z'
  let digits = randomNumericString(890)

  serial += digits.slice(0, 2)
  serial += ' '
  serial += digits[2]
  serial += Bb26.randomString('aa', digits === '890' ? 'fy' : 'aaa')
    .toUpperCase()

  return serial
}

export default florida
