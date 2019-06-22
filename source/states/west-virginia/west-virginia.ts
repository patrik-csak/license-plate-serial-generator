import random from 'lodash.random'
import sample from 'lodash.sample'
import { bb26Random } from 'bb26'
import { randomNumericString } from '../../lib'

export default function westVirginia (): string {
  let string = ''
  const months = ['1', '2', '3', '4', '5', '7', '7', '8', '9', 'O', 'N', 'D']

  string += sample(months)
  string += sample(['', `${random(9)}`])
  string += bb26Random(string.length === 2 ? 'Z' : 'ZZ')
  string += ' '
  string += randomNumericString(string.length === 4 ? 999 : 9999)

  return string.toUpperCase()
}
