import { Bb26, random, randomNumericString } from '../../modules'

const virginia = (): string => {
  interface Range {
    min: string
    max: string
  }

  const ranges: Range[] = [
    { min: 'vaa', max: 'vzz' },
    { min: 'uzz', max: 'utu' },
  ]
  const range = random(ranges)

  const letters: string = Bb26.randomString(range.min, range.max)
  const numbers: string = randomNumericString(
    letters === range.min ? 1000 : 0,
    9999,
  )

  return `${letters}-${numbers}`.toUpperCase()
}

export default virginia
