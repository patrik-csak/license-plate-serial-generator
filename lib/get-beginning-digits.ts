import getFirstMatchingPattern from './get-first-matching-pattern'

const getBeginningDigits = (string: string) => getFirstMatchingPattern(
  string,
  /^\d+/,
)

export default getBeginningDigits
