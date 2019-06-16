import { Bb26, random, randomNumericString } from '../../modules'

interface Month {
  codes: string[]
  month: number
}

const months: Month[] = [
  { codes: ['a', 'b'], month: 0 },
  { codes: ['c'], month: 1 },
  { codes: ['d', 'e'], month: 2 },
  { codes: ['f', 'g'], month: 3 },
  { codes: ['h', 'j'], month: 4 },
  { codes: ['k', 'l'], month: 5 },
  { codes: ['m', 'n'], month: 6 },
  { codes: ['p', 'r'], month: 7 },
  { codes: ['s', 't'], month: 8 },
  { codes: ['u', 'v'], month: 9 },
  { codes: ['w', 'x'], month: 10 },
  { codes: ['y', 'z'], month: 11 },
]

const missouri = (): string => {
  let serial = random(random(months).codes)
  serial += Bb26.randomString('z')
  serial += randomNumericString(9)
  serial += ' '
  serial += Bb26.randomString('z')
  serial += randomNumericString(9)
  serial += Bb26.randomString('z')

  return serial.toUpperCase()
}

export default missouri
