import { bb26Random, bb26Range } from 'bb26'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

/** @ignore */
export function hawaiiCounty (): string {
  const letters = sample(['H', 'Z']) + bb26Random('AA', 'AAA')
  const digits = randomNumericString(999)

  return `${letters} ${digits}`
}

/** @ignore */
export function honoluluCounty (): string {
  const county = sample(['E', 'F', 'G', 'J', 'N', 'P', 'R', 'S', 'T'])
  const validLetters = bb26Range('AA', county === 'T' ? 'TU' : 'AAA')
    .filter(letters => !/[HKLM]/.test(letters))
  const letters = sample(validLetters)
  const numbers = randomNumericString(999)

  return `${county}${letters} ${numbers}`
}

/** @ignore */
export function kauaiCounty (): string {
  const letters = bb26Random('AA', 'AAA')
  const numbers = randomNumericString(999)

  return `K${letters} ${numbers}`
}

/** @ignore */
export function mauiCounty (): string {
  const county = sample(['M', 'L'])
  const letters = bb26Random('AA', 'AAA')
  const numbers = randomNumericString(999)

  return `${county}${letters} ${numbers}`
}

export default function hawaii (): string {
  const counties = [
    hawaiiCounty,
    honoluluCounty,
    kauaiCounty,
    mauiCounty,
  ]

  // TODO: Weigh county choice based on population
  return (<() => string>sample(counties))()
}
