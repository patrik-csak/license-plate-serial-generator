import { Bb26, randomNumericString } from '../../modules'

const tennessee = (): string => {
  const letters: string = Bb26.randomString('bbb', 'btg')
  const numbers: string = randomNumericString(1, 999)

  return `${letters}-${numbers}`.toUpperCase()
}

export default tennessee
