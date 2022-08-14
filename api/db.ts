import knex from 'knex';
 
const db = knex({
  client: 'mysql2',
  connection: {
      host: 'localhost',
      database: 'api',
      user: 'root',
      port: 3307,
      password: 'bluedoor99?'
  }
});

export default db 