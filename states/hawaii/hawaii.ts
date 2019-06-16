import { Bb26, random, randomNumericString } from '../../modules'

const hawaiiCounty = (): string => {
  let string = ''

  string += random(['H', 'Z'])
  string += Bb26.randomString('aa', 'aaa').toUpperCase()
  string += ' '
  string += randomNumericString(999)

  return string
}

const honoluluCounty = (): string => {
  const county = random(
    ['e', 'f', 'g', 'j', 'n', 'p'].concat(Bb26.range({ start: 'r', end: 'u' })),
  )
  const validLetters = Bb26.range({
    start: 'ea',
    end: county === 't' ? 'tu' : 'aaa',
  })
    .filter(string => {
      return 'hklm'.split('').every(letter => !string.includes(letter))
    })
  const letters = random(validLetters)
  const numbers = randomNumericString(999)

  return `${county}${letters} ${numbers}`.toUpperCase()
}

const kauaiCounty = (): string => {
  const letters = Bb26.randomString('aa', 'zz')
  const numbers = randomNumericString(999)

  return `K${letters} ${numbers}`.toUpperCase()
}

// Maui county format: `MAB 123` or `LAB 123`
const mauiCounty = (): string => {
  const county: string = random(['m', 'l'])
  const letters = Bb26.randomString('aa', 'zz')
  const numbers = randomNumericString(999)

  return `${county}${letters} ${numbers}`.toUpperCase()
}

const hawaii = (): string => {
  const counties: (() => string)[] = [
    hawaiiCounty,
    honoluluCounty,
    kauaiCounty,
    mauiCounty,
  ]

  // TODO: Weigh county choice based on population
  return random(counties)()
}

export { hawaiiCounty, honoluluCounty, kauaiCounty, mauiCounty }
export default hawaii
