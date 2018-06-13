import charToDecimal from './char-to-decimal'

export default (string: string): number => {
    let number: number = 0
    string = string.toLowerCase()

    for (let i = 0; i < string.length; i++) {
        const char = string[string.length - i - 1]

        number += Math.pow(26, i) * charToDecimal(char)
    }

    return number
}
