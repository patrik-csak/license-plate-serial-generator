import { Bb26, randomNumericString } from '../../lib'

const minnesota = (): string => {
  const letters: string = Bb26.randomString('aaa', 'ber')
  const numbers: string = randomNumericString(1, 999)

  return `${letters}-${numbers}`.toUpperCase()
}

export default minnesota
