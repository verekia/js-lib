import pg from 'pg'

import createPgKnex from './'

test(null, () => {
  expect(pg.defaults.ssl).toBe(false)
  expect(() => createPgKnex()).toThrow()
  expect(() => createPgKnex('bla')).toThrow()
  createPgKnex('bla', 'bla')
  expect(pg.defaults.ssl).toBe(true)
})
