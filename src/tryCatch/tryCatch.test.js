import tryCatch from './'

test(null, () => {
  expect(() => tryCatch()).toThrow()
  expect(() => tryCatch(12)).toThrow()
  expect(() => tryCatch(() => {})).toThrow()
  expect(() => tryCatch(() => {}, 12)).toThrow()
  expect(() => tryCatch(() => {}, () => {}, 12)).toThrow()

  expect(tryCatch(() => 42, () => {})).toBe(42)
  expect(
    tryCatch(() => {
      throw Error('foo')
    }, ex => ex.message),
  ).toBe('foo')
})
