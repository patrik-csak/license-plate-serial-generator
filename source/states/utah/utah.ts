import { bb26Random } from 'bb26'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

/** @ignore */
export function arch (): string {
  const letter = bb26Random('V', 'Z')
  const digits = randomNumericString(
    letter === 'V' ? 215 : 1,
    letter === 'Z' ? 1 : 999,
    3,
  )
  const letters = bb26Random(
    letter + digits === 'V215' ? 'RK' : 'AA',
    letter + digits === 'Z001' ? 'AA' : 'AAA',
  )
  const left = letter + digits.substring(0, 2)
  const right = digits.substring(2) + letters

  return `${left} ${right}`
}

/** @ignore */
export function god (): string {
  let serial = randomNumericString(5)
  serial += bb26Random(serial === '5' ? 'E' : 'Z')
  serial += randomNumericString(serial === '5E' ? 1 : 9)
  serial += bb26Random('AA', serial === '5E1' ? 'NZ' : 'AAA')

  return serial
}

/** @ignore */
export function ski (): string {
  const numbers = randomNumericString(1, 999)
  const left = bb26Random('F') + numbers.slice(0, 2)
  const right = numbers.slice(2) + bb26Random('AA', 'KB')

  return `${left} ${right}`
}

export default function utah (): string {
  return (<() => string>sample([arch, god, ski]))()
}
