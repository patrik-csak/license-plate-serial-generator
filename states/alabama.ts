// Spec, as of 2014-01-02:
// - Format: 0AB1234 or 00AB123
// - `0` or `00` is county code

import Bb26 from '../modules/bb26'
import randomNumericString from '../modules/random-numeric-string'

export default (): string => {
    let serial: string = ''

    // County code:
    // TODO: Weigh county code choice based on population
    serial += randomNumericString(1, 67)
    serial += Bb26.randomString('zz').toUpperCase()
    serial += randomNumericString(1, serial.length === 3 ? 9999 : 999)

    return serial
}
