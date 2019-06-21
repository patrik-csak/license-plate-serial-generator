const charToDecimal = require('../lib/char-to-decimal').default

test('convert \'a\' to 1', () => {
  expect(charToDecimal('a'))
    .toBe(1)
})

test('convert \'b\' to 2', () => {
  expect(charToDecimal('b'))
    .toBe(2)
})

test('convert \'z\' to 26', () => {
  expect(charToDecimal('z'))
    .toBe(26)
})
