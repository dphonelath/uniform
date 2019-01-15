
exports.up = function(knex, Promise) {
    return knex.schema.createTable('requests',(table) => {
        table.increments()
        table.text('description')
        table.string('photoURL')
        table.integer('usersID').references('users.id').unsigned().onDelete('cascade')
        table.integer('tailorsID').references('tailors.id').unsigned().onDelete('cascade')
        table.string('dropoffDate')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('requests');
};
