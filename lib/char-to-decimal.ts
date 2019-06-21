// Bijective base-26 char to decimal

const charToDecimal = (string: string): number => {
    return string.toLowerCase()[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1
}

export default charToDecimal
