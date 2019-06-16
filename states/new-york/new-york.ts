import { Bb26, randomNumericString } from '../../modules'

const newYork = (): string => {
  const letters: string = Bb26.randomString('faa', 'jct')
  const numbers: string = randomNumericString(
    letters === 'faa' ? 1000 : 0,
    9999,
  )

  return `${letters}-${numbers}`.toUpperCase()
}

export default newYork
