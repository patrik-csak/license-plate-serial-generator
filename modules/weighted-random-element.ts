import randomNumber from './random-number'

interface Element<T> {
  value: T
  weight: number
}

function weightedRandomElement<T> (elements: Element<T>[]): T {
  const total: number = elements.reduce((sum, element) => {
    return sum + element.weight
  }, 0)
  let number: number = randomNumber(1, total)

  for (const element of elements) {
    number -= element.weight

    if (number <= 0) return element.value
  }

  throw new Error('number is somehow greater than 0')
}

export default weightedRandomElement
