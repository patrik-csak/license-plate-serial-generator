import { Bb26, randomNumber, randomNumericString } from '../../modules'

const southDakota = (): string => {
  const county: number = randomNumber(1, 67)
  const right: string = randomNumericString(999)
  let left: string = `${county}`

  left += Bb26.randomString('z')
  if (left.length === 2) left += randomNumber(9)

  return `${left} ${right}`.toUpperCase()
}

export default southDakota
