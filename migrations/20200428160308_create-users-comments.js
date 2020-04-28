
exports.up = function(knex) {
    return knex.schema.createTable('users_comments', (table) => {
        table.increments();
        // table.integer('usersId').unsigned().notNullable();
        // table.foreign('usersId').references('id').inTable('users');
        table.integer('profileId').unsigned().notNullable();
        table.foreign('profileId').references('id').inTable('profiles');
        table.text('comment');
        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());
        table.timestamp('deletedAt').nullable();
    })
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable('users_comments');
  };
  