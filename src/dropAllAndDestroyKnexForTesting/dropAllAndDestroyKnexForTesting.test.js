import 'dotenv/config'

import dropAllAndDestroyKnexForTesting from './'
import createPgKnex from '../createPgKnex'

test(
  null,
  async () => {
    const knex = await createPgKnex(process.env.TESTING_DATABASE_URL, 'unused')
    process.env.NODE_ENV = 'not-test'
    try {
      await dropAllAndDestroyKnexForTesting(knex)
    } catch (err) {
      expect(err.message).toBe(
        'Critical: You are trying to use dropAllAndDestroyKnexForTesting on a environment that is not `test`.',
      )
    }
    process.env.NODE_ENV = 'test'
    await dropAllAndDestroyKnexForTesting(knex)
  },
  15000,
)
