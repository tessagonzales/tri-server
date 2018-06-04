
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
      table.increments()
      table.string('f_name');
      table.string('l_name');
      table.string('phone_num');
      table.string('pw');
      table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
