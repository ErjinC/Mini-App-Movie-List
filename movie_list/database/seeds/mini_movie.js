/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'The Protector'},
    {title: 'Drunken Master'},
    {title: 'Ong Bak'},
    {title: 'The Raid'},
    {title: 'The Rebel'},
    {title: 'Ip Man'}
  ]);
};
