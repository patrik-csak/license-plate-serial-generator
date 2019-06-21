const base26ToDecimal = require('../lib/bb26-to-decimal').default

test('convert \'a\' to 1', () => {
  expect(base26ToDecimal('a'))
    .toBe(1)
})

test('convert \'b\' to 2', () => {
  expect(base26ToDecimal('b'))
    .toBe(2)
})

test('convert \'z\' to 26', () => {
  expect(base26ToDecimal('z'))
    .toBe(26)
})

test('convert \'aa\' to 27', () => {
  expect(base26ToDecimal('aa'))
    .toBe(27)
})

test('convert \'ab\' to 28', () => {
  expect(base26ToDecimal('ab'))
    .toBe(28)
})

test('convert \'zz\' to 28', () => {
  expect(base26ToDecimal('ab'))
    .toBe(28)
})
