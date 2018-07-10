const express = require('express');
const router = express.Router();

const queries = require('../partyqueries');

router.get("/", (request, response, next) => {
    queries.list().then(parties => {
        response.json({
            parties
        });
    }).catch(next);
});

router.get("/:partyCode", (request, response, next) => {
    queries.read(request.params.partyCode).then(party => {
        party
            ?
            response.json({
                party
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(party => {
        response.status(201).json({
            party
        });
    }).catch(next);
});

router.delete("/:partyCode", (request, response, next) => {
    queries.delete(request.params.partyCode).then(() => {
        response.status(204).json({
            deleted: true
        });
    }).catch(next);
});

router.put("/:partyCode", (request, response, next) => {
    queries.update(request.params.partyCode, request.body).then(party => {
        response.json({
            party
        });
    }).catch(next);
});

module.exports = router;