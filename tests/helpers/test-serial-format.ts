import testSerial from './test-serial'

export default function testSerialFormat (
  serial: string, pattern: RegExp | RegExp[],
): void {
  const patterns = Array.isArray(pattern) ? pattern : [pattern]

  testSerial('Should match serial format', serial, serial => {
    const matches = patterns.some(regex => regex.test(serial))

    expect(matches).toBe(true)
  })
}
