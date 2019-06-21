import { Bb26, interpunct, randomNumericString } from '../../lib'

const nevada = (): string => {
  const left: string = randomNumericString(1, 999)
  const letter: string = Bb26.randomString('e')
  const right: string = randomNumericString(letter === 'e' ? 49 : 99)

  return (left + interpunct + letter + right).toUpperCase()
}

export default nevada
