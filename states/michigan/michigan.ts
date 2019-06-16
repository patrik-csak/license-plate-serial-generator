import { Bb26, randomNumericString } from '../../modules'

const michigan = (): string => {
  const letters: string = Bb26.randomString('daa', 'dwx')
  const numbers: string = randomNumericString(9999)

  return `${letters} ${numbers}`.toUpperCase()
}

export default michigan
