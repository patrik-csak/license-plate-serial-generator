import randomNumber from './random-number'

interface Element {
    value: any
    weight: number
}

const weightedRandomElement = (elements: Element[]): any => {
    const total: number = elements.reduce(
        (sum, element) => sum + element.weight,
        0
    )
    let number: number = randomNumber(1, total)

    for (let i = 0; i < elements.length; i++) {
        number -= elements[i].weight

        if (number <= 0) return elements[i].value
    }
}

export default weightedRandomElement
