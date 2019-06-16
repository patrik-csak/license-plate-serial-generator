import { Bb26, random, randomNumericString } from '../../modules'

const newJersey = (): string => {
  let serial = random(
    Bb26.range({ end: 'd' }).filter(string => !/[ioq]/.test(string)),
  )
  serial += randomNumericString(
    serial === 'a' ? 10 : 0,
    serial === 'c' ? 62 : 99,
  )
  serial += '-'
  serial += random(
    Bb26.range({
      start: serial === 'a10-' ? 'eff' : 'aaa',
      end: serial === 'c62-' ? 'lkb' : 'aaaa',
    }).filter(string => !/[ioq]/.test(string)),
  )

  return serial.toUpperCase()
}

export default newJersey
