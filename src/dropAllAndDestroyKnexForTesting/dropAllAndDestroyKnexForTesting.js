// @flow

const dropAllAndDestroyKnexForTesting = async (knex: Function) => {
  if (process.env.NODE_ENV !== 'test' && !process.env.OVERRIDE_NODE_ENV_WITH_TESTING) {
    throw Error(
      'Critical: You are trying to use dropAllAndDestroyKnexForTesting on a environment that is not `test`.',
    )
  }
  await knex.raw('DROP SCHEMA public CASCADE; CREATE SCHEMA public;')
  knex.destroy()
  return null
}

export default dropAllAndDestroyKnexForTesting
