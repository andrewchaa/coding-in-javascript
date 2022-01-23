test('pass selector to findStudentsBy', () => {

  const selector  = (country, school) =>
    (student) => student.address.country === country && student.school === school

  const findStudentsBy = (friends, selector) =>  friends.filter(selector)
  const curry =  { address : { country: 'UK' }, school : 'LSE' }
  const church = { address : { country: 'US' }, school : 'Princeton' }

  expect(findStudentsBy([curry, church], selector('US', 'Princeton')))
    .toStrictEqual([church])
})

test('pass multiplier as operation', () => {
  const applyOperation = (a, b, opt) => opt(a,b)
  const multiplier = (a, b) => a * b

  expect(applyOperation(2, 3, multiplier)).toBe(6)
})

test('curried add', () => {
  const add = (a) => (b) => a +b

  expect(add(5)(4)).toBe(9)
})
