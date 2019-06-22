import { bb26Range } from 'bb26'
import random from 'lodash.random'
import sample from 'lodash.sample'

export default function maine (): string {
  const digits = random(5252)

  const validLetters = bb26Range(
    digits === 1 ? 'GA' : 'AA',
    digits === 5252 ? 'XL' : 'AAA',
  )
    .filter(letters => !letters.includes('O'))

  const letters = sample(validLetters)

  return `${digits} ${letters}`
}
