import { Bb26, random, randomNumericString } from '../../lib'

const arch = (): string => {
  let serial = Bb26.randomString('v', 'z')
  const minNumber = serial === 'v' ? 215 : 1
  const maxNumber = serial === 'z' ? 1 : 999

  serial += randomNumericString(minNumber, maxNumber, 3)

  const minLetters = serial === 'v215' ? 'rk' : 'aa'
  const maxLetters = serial === 'z001' ? 'aa' : 'aaa'

  serial += Bb26.randomString(minLetters, maxLetters)

  return (serial.substring(0, 3) + ' ' + serial.substring(3)).toUpperCase()
}

const god = (): string => {
  return (randomNumericString(9) + 'a' + randomNumericString(9)
    + Bb26.randomString('aa', 'va'))
    .toUpperCase()
}

const ski = (): string => {
  const numbers: string = randomNumericString(1, 999)
  const left: string = Bb26.randomString('f') + numbers.slice(0, 2)
  const right: string = numbers.slice(2) + Bb26.randomString('aa', 'kb')

  return `${left} ${right}`.toUpperCase()
}

const utah = (): string => {
  return random([arch, god, ski])()
}

export { arch, god, ski }
export default utah
