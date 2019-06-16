import { Bb26, interpunct, randomNumericString } from '../../modules'

const connecticut = (): string => {
  const letters: string = Bb26.randomString('aa', 'ap').toUpperCase()
  const numbers: string = randomNumericString(1, 30000)

  return letters + interpunct + numbers
}

export default connecticut
