const decimalToBase26 = require('../modules/decimal-to-base-26').default

test('convert 1 to \'a\'', () => {
  expect(decimalToBase26(1))
    .toBe('a')
})

test('convert 2 to \'b\'', () => {
  expect(decimalToBase26(2))
    .toBe('b')
})

test('convert 26 to \'z\'', () => {
  expect(decimalToBase26(26))
    .toBe('z')
})

test('convert 27 to \'aa\'', () => {
  expect(decimalToBase26(27))
    .toBe('aa')
})

test('convert 28 to \'ab\'', () => {
  expect(decimalToBase26(28))
    .toBe('ab')
})

test('convert 702 to \'zz\'', () => {
  expect(decimalToBase26(702))
    .toBe('zz')
})

test('convert 703 to \'aaa\'', () => {
  expect(decimalToBase26(703))
    .toBe('aaa')
})
