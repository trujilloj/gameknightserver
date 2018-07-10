const express = require('express');
const router = express.Router();

const queries = require('../memberqueries');

router.get("/", (request, response, next) => {
    queries.list().then(members => {
        response.json({
            members
        });
    }).catch(next);
});

router.get("/:partyCode", (request, response, next) => {
    queries.read(request.params.partyCode).then(member => {
        member
            ?
            response.json({
                member
            }) :
            response.status(404).json({
                message: 'Not found'
            })
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(member => {
        response.status(201).json({
            member
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
    queries.update(request.params.partyCode, request.body).then(member => {
        response.json({
            member
        });
    }).catch(next);
});

module.exports = router;