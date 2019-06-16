import { Bb26, randomNumericString } from '../../modules'

const arkansas = (): string => {
  const letters: string = Bb26.randomString('kpt', 'xnz').toUpperCase()
  const numbers: string = randomNumericString(1, 999)

  return `${numbers} ${letters}`
}

export default arkansas
