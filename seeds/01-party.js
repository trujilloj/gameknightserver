const parties = require('../parties');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('party').del()
    .then(function () {
      // Inserts seed entries
      return knex('party').insert(parties);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE party_id_seq RESTART WITH 3;");
    });
};