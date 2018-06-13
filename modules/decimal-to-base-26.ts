import decimalToChar from './decimal-to-char'

export default (number: number): string => {
    let string: string = ''

    while (true) {
        string = decimalToChar(number % 26 || 26) + string
        number = Math.floor((number - 1) / 26)
        if (number === 0) break
    }

    return string
}
