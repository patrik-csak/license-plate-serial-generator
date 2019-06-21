import getFirstMatchingPattern from './get-first-matching-pattern'

const getEndingDigits = (string: string) => getFirstMatchingPattern(
  string,
  /\d+$/,
)

export default getEndingDigits
