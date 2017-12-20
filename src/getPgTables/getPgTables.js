// @flow

const getPgTables = async (knex: Function) =>
  (await knex('pg_catalog.pg_tables')
    .select('tablename')
    .where('schemaname', 'public')).map(t => t.tablename)

export default getPgTables
