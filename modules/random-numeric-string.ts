import randomNumber from './random-number'

export default (length: number): string => {
    const number: number = randomNumber(0, Math.pow(10, length) - 1)

    return String(number).padStart(length, '0')
}
