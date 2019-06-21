import { Bb26, randomNumericString } from '../../lib'

const iowa = (): string => {
  const letters: string = Bb26.randomString('gxv', 'hah')
  const min: number = 0
  const max: number = letters === 'hah' ? 57 : 999
  const numbers: string = randomNumericString(min, max, 3)

  return `${letters} ${numbers}`.toUpperCase()
}

export default iowa
