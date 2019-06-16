import { Bb26, randomNumericString, weightedRandomElement } from '../../modules'

interface LetterRange {
  value: { from: string, to: string }
  weight: number
}

const alaska = (): string => {
  const letterRanges: LetterRange[] = [{
    value: { from: 'fuz', to: 'fva' },
    weight: 999 - 100,
  }, {
    value: { from: 'gaa', to: 'gaa' },
    weight: (999 - 199) +
      (Bb26.toDecimal(Bb26.subtract('haa', 'gaa')) * 1000),
  }, {
    value: { from: 'kaa', to: 'kdy' },
    weight: (999 - 100) +
      (Bb26.toDecimal(Bb26.subtract('kdz', 'kaa')) * 1000),
  }]

  const letterRange = weightedRandomElement(letterRanges)
  let letters: string
  let numbers: string

  switch (letterRange.from) {
    case 'fuz':
      letters = 'fuz'
      numbers = randomNumericString(100, 999)
      break
    case 'gaa':
      letters = Bb26.randomString(letterRange.from, letterRange.to)
      numbers = randomNumericString(letters === 'gaa' ? 100 : 1, 999)
      break
    case 'kaa':
      letters = Bb26.randomString(letterRange.from, letterRange.to)
      numbers = randomNumericString(
        letters === 'kaa' ? 100 : 1,
        letters === 'kdy' ? 641 : 999,
      )
      break
    default:
      letters = ''
      numbers = ''
  }

  return `${letters.toUpperCase()} ${numbers}`
}

export default alaska
