// Bijective base-26 to decimal

import charToDecimal from "./char-to-decimal";

const bb26ToDecimal = (string: string): number => {
    let number: number = 0

    for (let i = 0; i < string.length; i++) {
        const char = string[string.length - i - 1].toLowerCase()

        number += Math.pow(26, i) * charToDecimal(char)
    }

    return number
}

export default bb26ToDecimal
