const testSerial = (
  name: string,
  serial: string,
  callback: (serial: string) => any,
): any => {
  test(`${name} (serial: '${serial}')`, () => callback(serial))
}

export default testSerial
