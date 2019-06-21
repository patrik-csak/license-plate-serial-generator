import testSerial from './test-serial'

const testSerialFormat = (serial: string, pattern: RegExp): void => {
  testSerial('Should match serial format', serial, serial => {
    expect(serial).toMatch(pattern)
  })
}

export default testSerialFormat
