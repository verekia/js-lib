// @flow

import createPgKnex from '../createPgKnex'

const createPgKnexAndDropAllForTesting = async (testingDatabaseUrl: string, migrationPath: string) => {
  if (process.env.NODE_ENV !== 'test' && !process.env.OVERRIDE_NODE_ENV_WITH_TESTING) {
    throw Error(
      'Critical: You are trying to use createPgKnexAndDropAllForTesting on a environment that is not `test`.',
    )
  }
  const knex = createPgKnex(testingDatabaseUrl, migrationPath)
  await knex.raw('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
  return knex
}

export default createPgKnexAndDropAllForTesting
