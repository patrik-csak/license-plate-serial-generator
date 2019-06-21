import { Bb26, random, randomNumber, randomNumericString } from '../../lib'

const westVirginia = (): string => {
  let string: string = ''
  const months: (number | string)[] = [
    1, 2, 3, 4, 5, 7, 7, 8, 9, 'o', 'n', 'd',
  ]

  string += random(months) + random(['', `${randomNumber(9)}`])
  string += Bb26.randomString(string.length === 2 ? 'z' : 'zz') + ' '
  string += randomNumericString(string.length === 4 ? 999 : 9999)

  return string.toUpperCase()
}

export default westVirginia
