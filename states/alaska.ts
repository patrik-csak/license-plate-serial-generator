import randomNumber from '../modules/random-number'
import randomAlphabeticString from '../modules/random-alphabetic-string'
import randomElement from '../modules/random-element'

export default (): string => {
    interface LetterRange {
        from: string
        to: string
    }

    const letterRanges: LetterRange[] = [
        {from: 'fuz', to: 'fuz'},
        {from: 'gaa', to: 'gzz'},
        {from: 'kaa', to: 'kcp'}
    ]

    const letterRange = randomElement(letterRanges)
    const letters = randomAlphabeticString(letterRange.from, letterRange.to)
        .toUpperCase()
    const numbers: number = randomNumber(100, 999)

    return `${letters} ${numbers}`
}
