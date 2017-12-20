import 'dotenv/config'

import createPgKnexAndDropAllForTesting from './'
import getPgTables from '../getPgTables'

test(
  null,
  async () => {
    process.env.NODE_ENV = 'not-test'
    try {
      await createPgKnexAndDropAllForTesting()
    } catch (err) {
      expect(err.message).toBe(
        'Critical: You are trying to use createPgKnexAndDropAllForTesting on a environment that is not `test`.',
      )
    }
    process.env.NODE_ENV = 'test'
    let knex = await createPgKnexAndDropAllForTesting(process.env.TESTING_DATABASE_URL, 'unused')
    expect(await getPgTables(knex)).toEqual([])
    await knex.schema.createTable('tablename', t => t.increments())
    expect(await getPgTables(knex)).toEqual(['tablename'])
    knex.destroy()
    knex = await createPgKnexAndDropAllForTesting(process.env.TESTING_DATABASE_URL, 'unused')
    expect(await getPgTables(knex)).toEqual([])
    knex.destroy()
  },
  15000,
)
