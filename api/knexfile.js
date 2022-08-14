// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
  client: 'mysql2',
  connection: {
      host: 'localhost',
      database: 'api',
      user: 'root',
      port: 3307,
      password: 'bluedoor99?'
    }
  }
}
