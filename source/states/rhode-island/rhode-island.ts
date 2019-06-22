import { bb26Random } from 'bb26'
import random from 'lodash.random'
import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'

/** @ignore */
export function alphaNumeric (): string {
  const letters = bb26Random('AA', 'ZZ')
  const numbers = random(10, 999)

  return `${letters}-${numbers}`
}

/** @ignore */
export function numeric (): string {
  return randomNumericString(99999)
}

export default function rhodeIsland () {
  return (<() => string>sample([alphaNumeric, numeric]))()
}
