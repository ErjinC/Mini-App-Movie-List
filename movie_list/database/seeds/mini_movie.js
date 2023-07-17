/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {id: 1, title: 'The Protector'},
    {id: 2, title: 'Drunken Master'},
    {id: 3, title: 'Ong Bak'},
    {id: 4, title: 'The Raid'},
    {id: 5, title: 'The Rebel'},
    {id: 6, title: 'Ip Man'}
  ]);
};
