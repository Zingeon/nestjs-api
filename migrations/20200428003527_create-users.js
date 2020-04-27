
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments();
      table.integer('profileId').unsigned().notNullable();
      table.primary().foreign('profileId').references('id').inTable('profiles');
      table.string('email', 50);
      table.boolean('active').defaultTo(true);
      table.boolean('ban').defaultTo(false);
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
      table.timestamp('deletedAt');
  })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
