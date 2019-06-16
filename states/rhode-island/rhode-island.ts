import { Bb26, random, randomNumber, randomNumericString } from '../../modules'

const alphaNumeric = (): string => {
  const letters: string = Bb26.randomString('aa', 'zz')
  const numbers: number = randomNumber(10, 999)

  return `${letters}-${numbers}`.toUpperCase()
}

const numeric = () => randomNumericString(99999)

const rhodeIsland = () => random([alphaNumeric, numeric])()

export { alphaNumeric, numeric }
export default rhodeIsland
