import randomNumericString from '../../modules/random-numeric-string'
import numberRange from '../../modules/number-range'
import random from '../../modules/random'

const wyoming = (): string => {
  // TODO: Weigh county choice based on population
  const county = random(numberRange(1, 23).concat(99))
  const digits = randomNumericString(99999)

  return `${county}-${digits}`.toUpperCase()
}

export default wyoming
