function randomNumber(max: number): number
function randomNumber(min: number, max: number): number

function randomNumber(a: number, b?: number): number {
    const max = b || a
    let min = b ? Math.ceil(a) : 0

    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min
}

export default randomNumber
