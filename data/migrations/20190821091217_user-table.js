
exports.up = function(knex) {
  return knex.schema.createTable('users' , tbl => {
      tbl.increments('id');
      tbl.string('firstName' , 50).notNullable();
      tbl.string('lastName' , 150).notNullable();
      tbl.string('email' , 100).notNullable().unique();
      tbl.string('password' , 200).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
