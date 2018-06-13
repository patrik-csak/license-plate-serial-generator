const decimalToChar = require('../modules/decimal-to-char').default

test('convert 1 to \'a\'', () => {
  expect(decimalToChar(1))
    .toBe('a')
})

test('convert 2 to \'b\'', () => {
  expect(decimalToChar(2))
    .toBe('b')
})

test('convert 26 to \'z\'', () => {
  expect(decimalToChar(26))
    .toBe('z')
})
