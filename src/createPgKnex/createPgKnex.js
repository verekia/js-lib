// @flow

import Knex from 'knex'
import pg from 'pg'

const createPgKnex = (databaseUrl: string, migrationPath: string) => {
  if (!databaseUrl || !migrationPath) {
    throw Error('You need to pass a databaseUrl and a migrationPath to createPgKnex')
  }
  pg.defaults.ssl = true
  return Knex({
    client: 'pg',
    connection: databaseUrl,
    migrations: { directory: migrationPath },
    searchPath: ['knex', 'public'],
  })
}

export default createPgKnex
