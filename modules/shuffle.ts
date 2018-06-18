import randomNumber from './random-number'

function shuffle<T>(array: T[]): T[] {
    let indices: number[] = array.map((value, index) => index)
    let shuffled: T[] = []

    array.forEach(item => {
        const [index] = indices.splice(randomNumber(indices.length - 1), 1)

        shuffled[index] = item
    })

    return shuffled
}

export default shuffle
