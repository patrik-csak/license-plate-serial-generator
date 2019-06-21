import { Bb26, randomNumericString } from '../../lib'

const texas = (): string => {
  const letters: string = Bb26.randomString('bbb', 'kzr')
  const numbers: string = randomNumericString(1, 9999)

  return `${letters}-${numbers}`.toUpperCase()
}

export default texas
