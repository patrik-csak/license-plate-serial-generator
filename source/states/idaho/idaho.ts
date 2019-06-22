import sample from 'lodash.sample'
import shuffle from 'lodash.shuffle'

import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

export default function idaho (): string {
  interface County {
    letter: string
    count: number
  }

  const counties: County[] = [
    { letter: 'A', count: 2 },
    { letter: 'B', count: 10 },
    { letter: 'C', count: 7 },
    { letter: 'E', count: 1 },
    { letter: 'F', count: 2 },
    { letter: 'G', count: 2 },
    { letter: 'I', count: 1 },
    { letter: 'J', count: 2 },
    { letter: 'K', count: 1 },
    { letter: 'L', count: 4 },
    { letter: 'M', count: 2 },
    { letter: 'N', count: 1 },
    { letter: 'O', count: 2 },
    { letter: 'P', count: 2 },
    { letter: 'S', count: 1 },
    { letter: 'T', count: 2 },
    { letter: 'V', count: 1 },
    { letter: 'W', count: 1 },
  ]
  const countyCodes: string[] = []
  let numbers: string
  let right: string = ''

  counties.forEach(county => {
    for (let i = 0; i < county.count; i++) {
      const count = county.count
      const number = count > 1 ? `${i + 1}` : ''

      countyCodes.push(number + county.letter)
    }
  })

  const countyCode = <string>sample(countyCodes)

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

      numbers = randomNumericString(<number>sample([999, 9999, 99999]))

      switch (numbers.length) {
        case 3:
          const letters = bb26Random('ZZ')
          numbers = randomNumericString(999)

          right = letters.length === 1
            ? randomNumericString(9) + letters + numbers
            : shuffle([letters, numbers]).join('')

          break
        case 4:
          const letter = bb26Random('Z')
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

      numbers = randomNumericString(<number>sample([999, 9999]))

      right = numbers.length === 3 ? bb26Random('Z') + numbers : numbers

      break
  }

  return `${countyCode} ${right}`
}
