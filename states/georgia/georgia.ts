import { Bb26, randomNumericString } from '../../modules'

const georgia = (): string => {
  const letters: string = Bb26.randomString('pfa', 'pma').toUpperCase()
  const digits: string = randomNumericString(9999)

  return letters + digits
}

export default georgia
