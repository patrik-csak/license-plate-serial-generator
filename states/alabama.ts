import randomNumber from '../modules/random-number'
import randomAlphabeticString from '../modules/random-alphabetic-string'
import randomNumericString from '../modules/random-numeric-string'

export default (): string => {
    let serial = ''

    // TODO: Weight county code choice based on population
    serial += randomNumber(1, 67) // County code
    serial += randomAlphabeticString('zz').toUpperCase()
    serial += randomNumericString(serial.length === 3 ? 4 : 3)

    return serial
}
