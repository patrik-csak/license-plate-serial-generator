// Spec (as of 2018-06-04):
// - Format: `1AB2345`
// - Range: `8CN0000` to `6DH9999`

import Bb26 from '../modules/bb26'
import randomNumber from '../modules/random-number'
import randomNumericString from '../modules/random-numeric-string'

const maryland = (): string => {
    const letters: string = Bb26.randomString('cn', 'dh')
    const leftNumber: string = `${randomNumber(
        letters === 'cn' ? 8 : 1,
        letters === 'dh' ? 6 : 9
    )}`
    const rightNumbers: string = randomNumericString(9999)

    return (leftNumber + letters + rightNumbers).toUpperCase()
}

export default maryland
