import { Bb26, random, randomNumericString } from '../../lib'

const colorado = (): string => {
  const letters = random(Bb26.range({ start: 'aewt', end: 'bfmz' }))
  const numbers = randomNumericString(1, letters === 'bfmy' ? 21 : 99)

  return `${letters.slice(0, 3)}-${letters[3]}${numbers}`.toUpperCase()
}

export default colorado
