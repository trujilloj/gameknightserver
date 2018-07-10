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
    update(partyCode, member) {
        return database('member').where('partyCode', partyCode).update(member, '*');

    },
    delete(partyCode) {
        return database('member').where('partyCode', partyCode).del();

    }
};