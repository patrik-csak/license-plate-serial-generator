import Bb26 from './bb26'

describe('Bb26', () => {
  describe('#range()', () => {
    test('Should return empty array if start and end are the same', () => {
      expect(Bb26.range({ start: 'a', end: 'a' })).toEqual([])
    })

    test('Should return an empty array if end is larger than start', () => {
      expect(Bb26.range({ start: 'b', end: 'a' })).toEqual([])
    })

    test('Should return the correct range', () => {
      expect(Bb26.range({ start: 'a', end: 'b' })).toEqual(['a'])
      expect(Bb26.range({ start: 'z', end: 'ab' })).toEqual(['z', 'aa'])
    })
  })
})
