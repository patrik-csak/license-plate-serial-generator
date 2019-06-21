import { Bb26, random, randomNumber, toUpperCase } from '../../lib'

const maine = (): string => {
  const digits = randomNumber(5252).toString()

  const validLetters = Bb26.range({
    start: digits === '1' ? 'ga' : 'aa',
    end: digits === '5252' ? 'xl' : 'aaa',
  })
    .filter(letters => !letters.includes('o'))
    .map(toUpperCase)

  const letters = random(validLetters)

  return digits + ' ' + letters
}

export default maine
