import { Bb26, randomNumericString } from '../../lib'

const southCarolina = (): string => {
  const letters: string = Bb26.randomString('lzd', 'pvy')
  const numbers: string = randomNumericString(
    letters === 'lzd' ? 101 : 0,
    999,
  )

  return `${letters} ${numbers}`.toUpperCase()
}

export default southCarolina
