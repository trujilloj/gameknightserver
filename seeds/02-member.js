const members = require('../members');

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('member').del()
    .then(function () {
      // Inserts seed entries
      return knex('member').insert(members);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE member_id_seq RESTART WITH 6;");
    });
};