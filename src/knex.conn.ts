const Knex = require('knex');

export default Knex({
  client: 'pg',
  useNullAsDefault: true,
  connection: {
    filename: 'knexfile.db'
  }
});