export default (number: number): string => {
    if (number < 1 || number > 26) return

    return String.fromCharCode('a'.charCodeAt(0) - 1 + number)
}
