import randomNumericString from '../../lib/random-numeric-string'
import numberRange from '../../lib/number-range'
import random from '../../lib/random'

const wyoming = (): string => {
  // TODO: Weigh county choice based on population
  const county = random(numberRange(1, 23).concat(99))
  const digits = randomNumericString(99999)

  return `${county}-${digits}`.toUpperCase()
}

export default wyoming
