import 'dotenv/config'

import getPgTables from './'
import createPgKnex from '../createPgKnex'

let knex

beforeEach(async () => {
  knex = createPgKnex(process.env.TESTING_DATABASE_URL, 'unused')
  await knex.raw('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
})
afterEach(async () => {
  knex.destroy()
  knex = null
})

test(null, async () => {
  expect(await getPgTables(knex)).toEqual([])
  await knex.schema.createTable('tablename', t => t.increments())
  expect(await getPgTables(knex)).toEqual(['tablename'])
})
