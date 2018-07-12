const database = require("./database-connection");

module.exports = {
    list() {
        return database('member');
    },
    read(partyCode) {
        return database('member').where('partyCode', partyCode);

    },
    create(member) {
        return database('member').insert(member, '*').then(record => record[0]);

    },
    update(id, member) {
        return database('member').where('id', id).update(member, '*');

    },
    delete(partyCode) {
        return database('member').where('partyCode', partyCode).del();

    }
};