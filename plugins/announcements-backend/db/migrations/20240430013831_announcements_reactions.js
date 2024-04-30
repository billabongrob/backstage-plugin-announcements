// @ts-check

/**
 * @param { import("knex").Knex } knex
 */
exports.up = async function up(knex) {
  await knex.schema.createTable('reactions', table => {
    table.comment('The table for announcement reactions.');
    table.increments('id').primary().comment('Reaction ID');
    table
      .text('announcement_id')
      .notNullable()
      .comment('Foreign key referencing the announcement ID')
      .references('id')
      .inTable('announcements')
      .onDelete('CASCADE');
    table.text('user_id').notNullable().comment('User ID of the reacting user');
    table
      .enu('reaction_type', ['like', 'dislike'])
      .notNullable()
      .comment('Type of reaction (like or dislike)');
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .comment('Timestamp when the reaction was created');
  });
};

/**
 * @param {import('knex').Knex} knex
 */
exports.down = async function down(knex) {
  await knex.schema.dropTable('reactions');
};
