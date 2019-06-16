import { Bb26, randomNumericString } from '../../modules'

const kentucky = (): string => {
  const letters = Bb26.randomString('jcb', 'zjl')
  const numbers = randomNumericString(
    letters === 'jcb' ? 901 : 0,
    letters === 'zjl' ? 253 : 999,
  )

  return `${numbers} ${letters}`.toUpperCase()
}

export default kentucky
