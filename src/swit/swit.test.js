import swit from './'

test(null, () => {
  expect(swit(2, [[1, '1'], [2, '2'], [3, '3']], 'def')).toEqual('2')
  expect(swit(4, [[1, '1'], [2, '2'], [3, '3']], 'def')).toEqual('def')
  expect(swit(4, [[1, '1'], [2, '2'], [3, '3']])).toBe(undefined)

  expect(swit(2, [[() => 1, () => '1'], [() => 2, () => '2']], () => 'def')).toEqual('2')
  expect(swit(4, [[() => 1, () => '1'], [() => 2, () => '2']], () => 'def')).toEqual('def')
  expect(swit(4, [[() => 1, () => '1'], [() => 2, () => '2']])).toBe(undefined)

  expect(swit(() => 2, [[1, '1'], [2, '2']], 'def')).toEqual('2')
  expect(swit(() => 4, [[1, '1'], [2, '2']], 'def')).toEqual('def')
  expect(swit(() => 4, [[1, '1'], [2, '2']])).toBe(undefined)

  expect(swit(() => 2, [[1, '1'], [2, '2']], 'def')).toEqual('2')
  expect(swit(() => 4, [[1, '1'], [2, '2']], 'def')).toEqual('def')
  expect(swit(() => 4, [[1, '1'], [2, '2']])).toBe(undefined)

  expect(swit(2, [[1, '1'], [2, '2']], () => 'def')).toEqual('2')
  expect(swit(4, [[1, '1'], [2, '2']], () => 'def')).toEqual('def')
  expect(swit(4, [[1, '1'], [2, '2']])).toBe(undefined)
})
