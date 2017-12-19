import throwError from './'

test(null, () => {
  expect(() => throwError()).toThrow()
  expect(() => throwError('foo')).toThrow('foo')
  expect(() => throwError(Error('foo'))).toThrow('foo')
})
