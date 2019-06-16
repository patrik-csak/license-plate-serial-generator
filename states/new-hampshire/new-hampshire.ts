import randomNumericString from '../../modules/random-numeric-string'

const newHampshire = (): string => {
    const numbers: string = randomNumericString(1000000, 4585718)

    return numbers.slice(0, 3) + ' ' + numbers.slice(3)
}

export default newHampshire
