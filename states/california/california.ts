import { Bb26, randomNumericString } from '../../modules'

const california = (): string => {
  let serial: string = ''

  serial += randomNumericString(6, 8)
  serial += Bb26.randomString(
    serial === '6' ? 'tpw' : 'aaa',
    serial === '8' ? 'kpq' : 'aaaa',
  ).toUpperCase()
  serial += randomNumericString(999)

  return serial
}

export default california
