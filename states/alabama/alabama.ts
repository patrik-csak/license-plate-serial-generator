import { Bb26, randomNumericString } from '../../modules'

export default (): string => {
  let serial: string = ''

  // County code:
  // TODO: Weigh county code choice based on population
  serial += randomNumericString(1, 67)
  serial += Bb26.randomString('zz').toUpperCase()
  serial += randomNumericString(1, serial.length === 3 ? 9999 : 999)

  return serial
}
