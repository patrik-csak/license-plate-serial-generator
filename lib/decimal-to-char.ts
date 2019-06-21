// Decimal to bijective base-26 char

const decimalToChar = (number: number): string => {
    return String.fromCharCode('a'.charCodeAt(0) - 1 + number)
}

export default decimalToChar
