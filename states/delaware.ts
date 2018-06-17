// Spec:
// - Format: `123456`
// - Range: `4` to `999999`

import randomNumber from '../modules/random-number'

const delaware = (): string => {
    return `${randomNumber(999999)}`
}

export default delaware
