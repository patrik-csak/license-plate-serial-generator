const getFirstMatchingPattern = (string: string, pattern: RegExp): string => {
  const match = string.match(pattern)

  return match ? match[0] : ''
}

export default getFirstMatchingPattern
