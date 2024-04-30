/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reactions').del();
  await knex('reactions').insert([
    {
      announcement_id: '1',
      user_id: 'default:user/guest',
      reaction_type: 'like',
    },
    {
      announcement_id: '1',
      user_id: 'default:user/kurtaking',
      reaction_type: 'dislike',
    },
    {
      announcement_id: '2',
      user_id: 'default:user/guest',
      reaction_type: 'like',
    },
    {
      announcement_id: '2',
      user_id: 'default:user/kurtaking',
      reaction_type: 'like',
    },
  ]);
};
