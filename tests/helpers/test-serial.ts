export default function testSerial(
	name: string,
	serial: string,
	callback: (serial: string) => void | undefined,
): any {
	test(`${name} (serial: '${serial}')`, () => callback(serial));
}
