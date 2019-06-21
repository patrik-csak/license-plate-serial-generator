import { Bb26, randomNumericString } from '../../lib'

const washingtonDc = (): string => {
  const letters: string = Bb26.randomString('fn', 'fv').toUpperCase()
  const min: number = letters === 'FN' ? 4000 : 0
  const max: number = letters === 'FV' ? 7999 : 9999
  const numbers = randomNumericString(min, max)

  return `${letters}-${numbers}`
}

export default washingtonDc
