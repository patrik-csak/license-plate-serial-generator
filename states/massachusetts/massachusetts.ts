import {
  Bb26,
  random,
  randomNumericString,
  toUpperCase,
} from '../../modules'

const massachusetts = (): string => {
  const validLetters = Bb26.range({ start: 'aaa', end: 'aaaa' })
    .map(toUpperCase)
    .filter(letters => !/[IOQU]/.test(letters))

  const letters = random(validLetters)

  const numbers = randomNumericString(letters === 'AAA' ? 10 : 0, 99)

  return `1${letters} ${numbers}`.toUpperCase()
}

export default massachusetts
