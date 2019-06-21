import { Bb26, random, randomNumericString } from '../../lib'

const maryland = (): string => {
  const digit = random([8, 9]).toString()
  const letters: string = Bb26.randomString(
    digit === '8' ? 'cn' : 'aa',
    digit === '9' ? 'dw': 'zz' ,
  ).toUpperCase()
  const digits = randomNumericString(0, digit + letters === '9DW' ? 2552 : 9999)

  return digit + letters + digits
}

export default maryland
