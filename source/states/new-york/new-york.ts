import { bb26Random } from 'bb26'

import { randomNumericString } from '../../lib'

export default function newYork (): string {
  const letters: string = bb26Random('FAA', 'JCT')
  const digits: string = randomNumericString(
    letters === 'FAA' ? 1000 : 0,
    9999,
  )

  return `${letters}-${digits}`
}
