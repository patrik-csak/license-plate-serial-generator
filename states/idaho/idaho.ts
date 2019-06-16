import { Bb26, random, randomNumericString, shuffle } from '../../modules'

const idaho = (): string => {
  interface County {
    letter: string
    count: number
  }

  const counties: County[] = [
    { letter: 'a', count: 2 },
    { letter: 'b', count: 10 },
    { letter: 'c', count: 7 },
    { letter: 'e', count: 1 },
    { letter: 'f', count: 2 },
    { letter: 'g', count: 2 },
    { letter: 'i', count: 1 },
    { letter: 'j', count: 2 },
    { letter: 'k', count: 1 },
    { letter: 'l', count: 4 },
    { letter: 'm', count: 2 },
    { letter: 'n', count: 1 },
    { letter: 'o', count: 2 },
    { letter: 'p', count: 2 },
    { letter: 's', count: 1 },
    { letter: 't', count: 2 },
    { letter: 'v', count: 1 },
    { letter: 'w', count: 1 },
  ]
  const countyCodes: string[] = []
  let numbers: string
  let right: string = ''

  counties.forEach(county => {
    for (let i = 0; i < county.count; i++) {
      const count: number = county.count
      const number: string = count > 1 ? `${i + 1}` : ''

      countyCodes.push(number + county.letter)
    }
  })

  const countyCode: string = random(countyCodes)

  switch (countyCode.length) {
    case 1:
      // There's only one county character, so the format must be
      // `A 123456`

      right = randomNumericString(999999)

      break
    case 2:
      // There are two county characters, so the format can be
      // `0A 12345`, `0A A1234`, `0A AB123`, `0A 1A234`, `0A 1234A`, or
      // `0A 123AB`

      numbers = randomNumericString(random([999, 9999, 99999]))

      switch (numbers.length) {
        case 3:
          const letters: string = Bb26.randomString('zz')
          numbers = randomNumericString(999)

          right = letters.length === 1
            ? randomNumericString(9) + letters + numbers
            : shuffle([letters, numbers]).join('')

          break
        case 4:
          const letter: string = Bb26.randomString('z')
          numbers = randomNumericString(9999)

          right = shuffle([letter, numbers]).join('')

          break
        case 5:
          right = numbers

          break
      }

      break
    case 3:
      // There are three county characters, so the format can be
      // `CCC 1234` or `CCC A123`

      numbers = randomNumericString(random([999, 9999]))

      right = numbers.length === 3
        ? Bb26.randomString('z') + numbers
        : numbers

      break
  }

  return `${countyCode} ${right}`.toUpperCase()
}

export default idaho
