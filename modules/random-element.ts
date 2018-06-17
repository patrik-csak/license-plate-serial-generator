function randomElement<T>(a: T[]): T {
    return a[Math.floor(Math.random() * a.length)]
}

export default randomElement
