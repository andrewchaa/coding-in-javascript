const _ = require('lodash')

test('reduce numbers operation', () => {
  expect(_([0, 1, 2, 3, 4, 5]).reduce(_.add)).toBe(15)
})
