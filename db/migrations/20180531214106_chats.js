
exports.up = function(knex, Promise) {
  return knex.schema.createTable('chats', (table) => {
      table.increments();
      table.text('message');
      table.integer('user_id')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
    table.integer('sent_to')
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .index()
      table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('chats')
};
