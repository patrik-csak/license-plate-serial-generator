import { Bb26, randomNumericString } from '../../modules'

const northDakota = (): string => {
  const numbers: string = randomNumericString(825)
  const letters: string = Bb26.randomString(
    numbers === '000' ? 'btr' : 'aaa',
    numbers === '825' ? 'cnl' : 'zzz',
  )

  return `${numbers} ${letters}`.toUpperCase()
}

export default northDakota
