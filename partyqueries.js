const database = require("./database-connection");

module.exports = {
    list() {
        return database('party');
    },
    read(partyCode) {
        return database('party').where('partyCode', partyCode).first();

    },
    create(party) {
        return database('party').insert(party, '*').then(record => record[0]);

    },
    update(partyCode, party) {
        return database('party').where('partyCode', partyCode).update(party, '*');

    },
    delete(partyCode) {
        return database('party').where('partyCode', partyCode).del();

    }
};