import getFirstMatchingPattern from './get-first-matching-pattern'

const getBeginningLetters = (string: string) => getFirstMatchingPattern(
  string,
  /^[A-Z]+/,
)

export default getBeginningLetters
