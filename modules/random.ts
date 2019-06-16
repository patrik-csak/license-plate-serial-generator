function random<T> (elements: T[]): T {
  return elements[Math.floor(Math.random() * elements.length)]
}

export default random
