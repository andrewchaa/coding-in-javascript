describe('arrays at a glance', () => {
  it('should look up by index', () => {
    const array = ['a', 'b', 'c']
    expect(array[0]).toBe('a')
    expect(array[1]).toBe('b')
    expect(array[2]).toBe('c')
  })

  it('should set an element by index', () => {
    const array = ['a', 'b', 'c']
    array[1] = 'x'
    expect(array).toEqual(['a', 'x', 'c'])
  })

  it('should give the length of the array', () => {
    const array = ['a', 'b', 'c']
    expect(array.length).toBe(3)
  })

  it('should add an element to the end of the array', () => {
    const array = ['a', 'b', 'c']
    array.push('d')
    expect(array).toEqual(['a', 'b', 'c', 'd'])
  })

  it('should remove an element from the end of the array', () => {
    const array = ['a', 'b', 'c']
    const removed = array.pop()
    expect(removed).toBe('c')
    expect(array).toEqual(['a', 'b'])
  })

  it('should add an element to the beginning of the array', () => {
    const array = ['a', 'b', 'c']
    array.unshift('x')
    expect(array).toEqual(['x', 'a', 'b', 'c'])
  })

  it('should remove an element from the beginning of the array', () => {
    const array = ['a', 'b', 'c']
    const removed = array.shift()
    expect(removed).toBe('a')
    expect(array).toEqual(['b', 'c'])
  })

  it('should remove an element from the middle of the array', () => {
    const array = ['a', 'b', 'c']
    array.splice(1, 1)
    expect(array).toEqual(['a', 'c'])
  })

  it('should insert an element into the middle of the array', () => {
    const array = ['a', 'b', 'c']
    array.splice(1, 0, 'x')
    expect(array).toEqual(['a', 'x', 'b', 'c'])
  })

  it('should copy an array', () => {
    const array = ['a', 'b', 'c']
    const copy = array.slice()
    expect(copy).toEqual(['a', 'b', 'c'])
    expect(copy).not.toBe(array)
  })

})
