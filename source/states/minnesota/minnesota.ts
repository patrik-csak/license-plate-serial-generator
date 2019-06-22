import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function minnesota (): string {
  const letters = bb26Random('AAA', 'DBY')
  const numbers = randomNumericString(1, 999)

  return `${letters}-${numbers}`
}
