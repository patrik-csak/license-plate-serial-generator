import getFirstMatchingPattern from './get-first-matching-pattern'

const getEndingLetters = (string: string) => getFirstMatchingPattern(
  string,
  /[A-Z]+$/,
)

export default getEndingLetters
