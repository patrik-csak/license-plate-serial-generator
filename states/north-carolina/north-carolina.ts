import { Bb26, randomNumericString } from '../../modules'

const northCarolina = (): string => {
  const letters: string = Bb26.randomString('paa', 'pla')
  const numbers: string = randomNumericString(
    letters === 'paa' ? 1001 : 0,
    9999,
  )

  return `${letters}-${numbers}`.toUpperCase()
}

export default northCarolina
