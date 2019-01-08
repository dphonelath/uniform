const express = require('express');
const router = express.Router();
const knex = require('../db/connections');

// Get all route
router.get('/', (req, res) => {
    knex('requests')
        .orderBy('id', 'asc')
        .then(request => {
            res.json({ request: request })
        })
});

// Get one route
router.get('/:id', (req, res, next) => {
    const id = req.params.id

    knex('requests')
        .where('id', id)
        .then(requests => {
            res.json({request: requests})
        })
});

// Post

router.post('/', (req, res, next) => {
    const body = req.body

    knex('requests')
        .insert(body)
        .returning('*')
        .then(requests =>{
            res.json({requests: requests[0]})
    })
});

// Put
router.put(':/id', (req, res) => {
    const id = req.params.id
    const body = req.body

    knex('requests')
        .where('id', id)
        .update(body)
        .returning('*')
        .then(updatedRequests => {
            res.json({ requests: updatedRequests[0] })
        })
})

// Delete

router.delete('/:id', (req, res) =>{
    const id = req.params.id

    knex('requests')
        .where('id', id)
        .delete()
        .returning('*')
        .then(deletedRequests => {
            res.json({ requests: deletedRequests[0]})
        })
})

module.exports = router