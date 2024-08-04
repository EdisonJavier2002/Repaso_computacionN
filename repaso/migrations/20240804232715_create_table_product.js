/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('product', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('description');
        table.string('brand');  //marca
        table.integer('stock');
        table.date('expiration'); //expiracion
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('product')
};
