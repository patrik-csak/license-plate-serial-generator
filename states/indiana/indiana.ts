import { Bb26, randomNumericString } from '../../modules'

const indiana = (): string => {
  const letters: string = Bb26.randomString('zzz')
  const numbers: string = randomNumericString(999)

  return `${numbers}${letters}`.toUpperCase()
}

export default indiana
