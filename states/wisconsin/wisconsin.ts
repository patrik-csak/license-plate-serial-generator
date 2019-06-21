import { Bb26, randomNumericString } from '../../lib'

const wisconsin = (): string => {
  const letters: string = Bb26.randomString('aaa', 'adj')
  const numbers: string = randomNumericString(1001, 9999)

  return `${letters}-${numbers}`.toUpperCase()
}

export default wisconsin
