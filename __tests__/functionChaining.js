const _ = require('lodash')
const R = require('ramda')

describe('Function Chaining', function (){
  const isEmpty = s => !s || !s.trim()
  const isValid = val => !_.isUndefined(val) && !_.isNull(val)
  const trim = str => str.replace(/^\s*|\s*$/g, '')
  const normalize = str => str.replace(/\-/g, '')

  test("Chaining methods together", function() {
    const names = ['alonzo church', 'Haskell curry', 'stephen_kleene',
      'John Von Neumann', 'stephen_kleene']

    const result = _.chain(names)
      .filter(isValid)
      .map(s => s.replace(/_/, ' '))
      .uniq()
      .map(_.startCase)
      .sort()
      .value()

    expect(result).toEqual(['Alonzo Church', 'Haskell Curry', 'John Von Neumann', 'Stephen Kleene'])
  })
})
