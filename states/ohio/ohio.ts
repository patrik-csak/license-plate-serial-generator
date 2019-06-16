import { Bb26, randomNumericString } from '../../modules'

const ohio = (): string => {
  const letters: string = Bb26.randomString('fwa', 'hme')
  const numbers: string = randomNumericString(
    letters === 'fwa' ? 1000 : 0,
    9999,
  )

  return `${letters} ${numbers}`.toUpperCase()
}

export default ohio
