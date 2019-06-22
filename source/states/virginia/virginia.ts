import sample from 'lodash.sample'

import { randomNumericString } from '../../lib'
import { bb26Random } from 'bb26'

/** @ignore */
interface Range {
  digitsEnd: number
  digitsStart: number
  lettersStart: string
  lettersEnd: string
}

export default function virginia (): string {
  const ranges: Range[] = [{
    digitsEnd: 9999,
    digitsStart: 1000,
    lettersEnd: 'VZZ',
    lettersStart: 'VAA',
  }, {
    digitsEnd: 2764,
    digitsStart: 9999,
    lettersEnd: 'UZZ',
    lettersStart: 'UPA',
  }]
  const range = <Range>sample(ranges)

  const letters = bb26Random(range.lettersStart, range.lettersEnd)
  const numbers = randomNumericString(
    letters === range.lettersStart ? range.digitsStart : 0,
    letters === range.lettersEnd ? range.digitsEnd : 9999,
  )

  return `${letters}-${numbers}`
}
