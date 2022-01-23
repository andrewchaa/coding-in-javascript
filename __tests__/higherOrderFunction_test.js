const selector  = (country, school) =>
  (student) => student.address.country === country && student.school === school

const findStudentsBy = (friends, selector) =>  friends.filter(selector)

test('findStudentsBy', () => {
  expect(1).toBe(1)
})
