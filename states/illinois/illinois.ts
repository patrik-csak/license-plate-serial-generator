import { Bb26, randomNumericString } from '../../modules'

const illinois = (): string => {
  const letters: string = Bb26.randomString('aq', 'bp')
  const min: number = letters === 'aq' ? 11001 : 0
  const max: number = letters === 'bp' ? 20703 : 99999
  const numbers: string = randomNumericString(min, max)

  return `${letters} ${numbers}`.toUpperCase()
}

export default illinois
