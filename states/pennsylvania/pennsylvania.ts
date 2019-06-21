import { Bb26, randomNumericString } from '../../lib'

const pennsylvania = (): string => {
  const letters: string = Bb26.randomString('klf', 'ktl')
  const numbers: string = randomNumericString(9999)

  return `${letters}-${numbers}`.toUpperCase()
}

export default pennsylvania
