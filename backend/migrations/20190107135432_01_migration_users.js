
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users',(table) => {
        table.increments()
        table.string('firstName')
        table.string('lastName')
        table.string('email')
        table.text('phone')
        table.decimal('armLength')
        table.decimal('chest')
        table.decimal('waist')
        table.decimal('hip')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
