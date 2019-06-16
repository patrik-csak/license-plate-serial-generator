import { Bb26, randomNumericString } from '../../modules'

const washington = (): string => {
  const letters: string = Bb26.randomString('aaa', 'bku')
  const numbers: string = randomNumericString(9999)

  return letters.toUpperCase() + numbers
}

export default washington
