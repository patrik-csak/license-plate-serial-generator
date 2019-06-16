import { Bb26, randomNumericString } from '../../modules'

const oregon = (): string => {
  const letters: string = Bb26.randomString('baa', 'kuh')
  const numbers: string = randomNumericString(1, 999)

  return `${numbers} ${letters}`.toUpperCase()
}

export default oregon
