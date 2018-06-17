// Spec (as of 2018-05-07):
// - Format: `1ABC123`
// - Range: `6TPW000` to `8DZZ999`

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

const california = (): string => {
    let serial: string = ''

    serial += randomNumericString(6, 8)
    serial += Bb26.randomString('tpw', 'dzz').toUpperCase()
    serial += randomNumericString(999)

    return serial
}

export default california
