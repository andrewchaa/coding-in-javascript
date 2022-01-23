const selector  = (country, school) =>
  (student) => student.address.country === country && student.school === school

const findStudentsBy = (friends, selector) =>  friends.filter(selector)

test('findStudentsBy', () => {

  const curry = {
    address : {
      country: 'UK'
    },
    school : 'LSE'
  }
  const church = {
    address : {
      country: 'US'
    },
    school : 'Princeton'
  }

  expect(findStudentsBy(
    [curry, church],
    selector('US', 'Princeton')
    )).toStrictEqual([church])
})
