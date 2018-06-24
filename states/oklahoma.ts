// Spec (as of 2018-06-04):
// - Format: `ABC-123`
// - Range: `AAA-001` to `IHL-999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const oklahoma = (): string => {
    const letters: string = Bb26.randomString('ihl')
    const numbers: string = randomNumericString(1, 999)

    return `${letters} ${numbers}`.toUpperCase()
}

export default oklahoma
