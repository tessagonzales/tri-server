
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favs', (table) => {
    table.increments();
    table.string('name');
    table.string('phone_num');
    table.integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favs')
};
