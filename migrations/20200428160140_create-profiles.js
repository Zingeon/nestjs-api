exports.up = function(knex) {
    return knex.schema.createTable('profiles', (table) => {
        table.increments();
        table.string('nickname', 16)
        table.specificType('firstName', 'CHAR(16) DEFAULT NULL');
        table.specificType('lastName', 'CHAR(16) DEFAULT NULL');
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('profiles');
  };