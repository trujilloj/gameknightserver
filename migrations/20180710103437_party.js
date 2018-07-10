exports.up = function (knex, Promise) {
    return knex.schema.createTable('party', table => {
        table.increments();
        table.text('dmName');
        table.text('partyCode');
        table.integer('xp');
        table.text('lastSession');
        table.text('partyMembers');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('party')
};