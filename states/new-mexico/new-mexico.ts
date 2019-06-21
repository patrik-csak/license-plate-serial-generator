import { Bb26, randomNumericString } from '../../lib'

const newMexico = (): string => {
  const numbers: string = randomNumericString(1, 999)
  const letters: string = Bb26.randomString(
    numbers === '001' ? 'maa' : 'aaa',
    numbers === '999' ? 'wjt' : 'zzz',
  )

  return `${numbers}-${letters}`.toUpperCase()
}

export default newMexico
