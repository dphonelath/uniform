
exports.up = function(knex, Promise) {  
    return knex.schema.createTable('tailors',(table) => {
        table.increments()
        table.string('name')
        table.string('category')
        table.string('website')
        table.text('phone')
        table.string('location')
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('tailors');
};
