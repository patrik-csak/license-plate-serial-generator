export default (string: string): number => {
    string = string.toLowerCase()

    return string[0].charCodeAt(0) - 'a'.charCodeAt(0) + 1
}
