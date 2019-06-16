import { Bb26, randomNumericString } from '../../modules'

const louisiana = (): string => {
  const numbers = randomNumericString(999)
  const letters = Bb26.randomString('aaa', numbers === '999' ? 'dev' : 'zzz')

  return `${numbers} ${letters}`.toUpperCase()
}

export default louisiana
