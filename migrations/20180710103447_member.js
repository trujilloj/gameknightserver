exports.up = function (knex, Promise) {
    return knex.schema.createTable('member', table => {
        table.increments();
        table.text('partyCode');
        table.text('playerName');
        table.text('characterName');
        table.text('race');
        table.text('class');
        table.text('loot');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTable('member')
};