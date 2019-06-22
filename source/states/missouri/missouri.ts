import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/** @ignore */
interface Month {
  codes: string[]
}

/** @ignore */
const months: Month[] = [
  { codes: ['A', 'B'] },
  { codes: ['C'] },
  { codes: ['D', 'E'] },
  { codes: ['F', 'G'] },
  { codes: ['H', 'J'] },
  { codes: ['K', 'L'] },
  { codes: ['M', 'N'] },
  { codes: ['P', 'R'] },
  { codes: ['S', 'T'] },
  { codes: ['U', 'V'] },
  { codes: ['W', 'X'] },
  { codes: ['Y', 'Z'] },
]

export default function missouri (): string {
  const month = <string>sample((<Month>sample(months)).codes)
  const left = month + bb26Random('Z') + randomNumericString(9)
  const right = bb26Random('Z') + randomNumericString(9) + bb26Random('Z')

  return `${left} ${right}`
}
