import { Bb26, randomNumericString } from '../../modules'

const oklahoma = (): string => {
  const letters: string = Bb26.randomString('aaa', 'jrl')
  const numbers: string = randomNumericString(1, 999)

  return `${letters}-${numbers}`.toUpperCase()
}

export default oklahoma
