import { Bb26, randomNumericString } from '../../lib'

const kansas = (): string => {
  const letters: string = Bb26.randomString('aaa', 'lek')
  const numbers: string = randomNumericString(999)

  return `${numbers} ${letters}`.toUpperCase()
}

export default kansas
