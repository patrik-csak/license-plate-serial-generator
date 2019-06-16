import { Bb26, randomNumericString } from '../../modules'

const vermont = (): string => {
  const letters: string = Bb26.randomString('bng', 'hgr')
  const numbers: string = randomNumericString(
    letters === 'bng' ? 100 : 0,
    999,
  )

  return `${letters} ${numbers}`.toUpperCase()
}

export default vermont
