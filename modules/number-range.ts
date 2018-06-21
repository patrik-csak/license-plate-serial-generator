function numberRange(end: number): number[]
function numberRange(start: number, end: number): number[]
function numberRange(a: number, b?: number): number[] {
    let array: number[] = []
    const end: number = b || a
    const start: number = b ? a : 0

    for (let i = start; i < end; i++) array.push(i)

    return array
}

export default numberRange
